from pydantic import BaseModel
from typing import Optional

class ItemBase(BaseModel):
    title: str
    description: Optional[str] = None
    is_completed: bool = False

class ItemCreate(ItemBase):
    pass

class ItemResponse(ItemBase):
    id: int

    class Config:
        from_attributes = True

