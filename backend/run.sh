#!/bin/bash

# 激活虚拟环境并启动 FastAPI 服务器
source venv/bin/activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000

