请按照以下要求初始化一个新的全栈项目：

### 1. 技术栈定制
- **前端 (Frontend):** {在此输入前端框架，如：Next.js (App Router), TypeScript, Tailwind CSS}
- **后端 (Backend):** {在此输入后端语言和框架，如：Node.js Express 或 Python FastAPI}
- **数据库 (Database):** {在此输入数据库，如：Prisma with PostgreSQL 或 MongoDB}

### 2. 项目结构
请在根目录下创建两个核心文件夹：
- `/frontend`: 包含所有前端源代码。
- `/backend`: 包含所有后端 API 和逻辑代码。
- 如果有共用的配置文件（如 docker-compose, .gitignore, README.md），请放在根目录。

### 3. 具体执行步骤
1. **初始化前端**：使用该框架的官方脚手架（如 npx create-next-app@latest 或 npm create vite@latest）在 /frontend 目录生成项目。
2. **初始化后端**：在 /backend 目录初始化项目，配置基础的入口文件（如 main.py 或 index.ts）和基础路由。
3. **环境变量**：在根目录和各自目录下创建 .env.example 文件。
4. **README**：创建一个根目录 README.md，说明如何同时启动前后端。

### 4. 编码规范
- 使用 TypeScript (如果适用)。
- 前后端通过 RESTful API 进行通信。
- 保持代码模块化，逻辑清晰。

请先列出你准备执行的终端命令，并在我确认后开始创建。