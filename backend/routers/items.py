from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import get_db
from models.item import Item
from schemas.item import ItemCreate, ItemResponse

router = APIRouter()

@router.get("/items", response_model=List[ItemResponse])
async def get_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """获取所有项目"""
    items = db.query(Item).offset(skip).limit(limit).all()
    return items

@router.get("/items/{item_id}", response_model=ItemResponse)
async def get_item(item_id: int, db: Session = Depends(get_db)):
    """根据 ID 获取项目"""
    item = db.query(Item).filter(Item.id == item_id).first()
    if item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@router.post("/items", response_model=ItemResponse)
async def create_item(item: ItemCreate, db: Session = Depends(get_db)):
    """创建新项目"""
    db_item = Item(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

@router.put("/items/{item_id}", response_model=ItemResponse)
async def update_item(item_id: int, item: ItemCreate, db: Session = Depends(get_db)):
    """更新项目"""
    db_item = db.query(Item).filter(Item.id == item_id).first()
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    for key, value in item.dict().items():
        setattr(db_item, key, value)
    db.commit()
    db.refresh(db_item)
    return db_item

@router.delete("/items/{item_id}")
async def delete_item(item_id: int, db: Session = Depends(get_db)):
    """删除项目"""
    db_item = db.query(Item).filter(Item.id == item_id).first()
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    db.delete(db_item)
    db.commit()
    return {"message": "Item deleted successfully"}

