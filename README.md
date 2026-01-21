# My Agent - 全栈项目

这是一个使用 React Native + TypeScript + Tailwind CSS 作为前端，Python FastAPI + SQLite 作为后端的全栈项目。

## 技术栈

### 前端
- **框架**: React Native (Expo)
- **语言**: TypeScript
- **样式**: Tailwind CSS (NativeWind)
- **开发工具**: Expo CLI

### 后端
- **框架**: FastAPI
- **语言**: Python 3.8+
- **数据库**: SQLite
- **ORM**: SQLAlchemy

## 项目结构

```
.
├── frontend/          # 前端 React Native 项目
│   ├── App.tsx       # 主应用组件
│   ├── global.css    # Tailwind CSS 全局样式
│   └── ...
├── backend/          # 后端 FastAPI 项目
│   ├── main.py       # FastAPI 应用入口
│   ├── database.py   # 数据库配置
│   ├── routers/      # API 路由
│   ├── models/       # 数据模型
│   ├── schemas/      # Pydantic 模式
│   └── ...
├── .gitignore        # Git 忽略文件
└── README.md         # 项目说明文档
```

## 快速开始

### 前置要求

- Node.js 18+ 和 npm
- Python 3.8+
- Expo CLI (可选，使用 npx 时会自动安装)

### 1. 克隆项目

```bash
git clone <repository-url>
cd my-agent
```

### 2. 启动后端

```bash
# 进入后端目录
cd backend

# 创建虚拟环境（如果还没有）
python3 -m venv venv

# 激活虚拟环境
# macOS/Linux:
source venv/bin/activate
# Windows:
# venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt

# 启动服务器
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

后端服务将在 `http://localhost:8000` 启动。

API 文档可在 `http://localhost:8000/docs` 访问（Swagger UI）。

### 3. 启动前端

打开新的终端窗口：

```bash
# 进入前端目录
cd frontend

# 安装依赖（如果还没有）
npm install

# 启动开发服务器
npm start
```

然后：
- 按 `i` 在 iOS 模拟器中打开
- 按 `a` 在 Android 模拟器中打开
- 按 `w` 在 Web 浏览器中打开
- 使用 Expo Go 应用扫描二维码在手机上运行

### 4. 环境变量配置

#### 后端环境变量

在 `backend/` 目录下创建 `.env` 文件：

```env
DATABASE_URL=sqlite:///./app.db
HOST=0.0.0.0
PORT=8000
```

#### 前端环境变量

在 `frontend/` 目录下创建 `.env` 文件：

```env
EXPO_PUBLIC_API_URL=http://localhost:8000
```

## API 端点

### 基础端点
- `GET /` - API 欢迎信息
- `GET /health` - 健康检查

### Items API
- `GET /api/items` - 获取所有项目
- `GET /api/items/{item_id}` - 获取单个项目
- `POST /api/items` - 创建新项目
- `PUT /api/items/{item_id}` - 更新项目
- `DELETE /api/items/{item_id}` - 删除项目

## 开发说明

### 前端开发

- 使用 TypeScript 进行类型安全开发
- 使用 Tailwind CSS 类名进行样式设计（通过 NativeWind）
- 组件应放在 `components/` 目录下
- API 调用应放在 `services/` 或 `api/` 目录下

### 后端开发

- 遵循 RESTful API 设计原则
- 使用 SQLAlchemy ORM 进行数据库操作
- 使用 Pydantic 进行数据验证
- 路由放在 `routers/` 目录下
- 数据模型放在 `models/` 目录下
- API 模式定义放在 `schemas/` 目录下

## 数据库

项目使用 SQLite 数据库，数据库文件将自动创建在 `backend/app.db`。

首次运行时会自动创建数据表。

## 常见问题

### 后端启动失败

- 确保已激活虚拟环境
- 检查 Python 版本是否为 3.8+
- 确保所有依赖已正确安装

### 前端无法连接后端

- 确保后端服务正在运行
- 检查 `EXPO_PUBLIC_API_URL` 环境变量是否正确
- 如果使用物理设备，确保设备与开发机器在同一网络

### Tailwind CSS 不生效

- 确保已正确配置 `tailwind.config.js`
- 检查 `babel.config.js` 中的 NativeWind 插件配置
- 确保 `global.css` 已正确导入

## 许可证

MIT

