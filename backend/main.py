from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routers import items

# 创建数据库表
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="My Agent API",
    description="全栈项目后端 API",
    version="1.0.0"
)

# 配置 CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 生产环境应该限制具体域名
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 注册路由
app.include_router(items.router, prefix="/api", tags=["items"])

@app.get("/")
async def root():
    return {"message": "Welcome to My Agent API", "version": "1.0.0"}

@app.get("/health")
async def health():
    return {"status": "healthy"}

