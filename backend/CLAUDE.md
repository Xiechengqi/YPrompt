# YPrompt Backend 后端项目文档

## 项目概述

YPrompt Backend 是一个基于 FastAPI 的高性能异步后端服务，为 YPrompt 提示词生成器提供完整的数据支持。采用**零配置启动**设计，默认使用SQLite + 本地认证，无需任何配置即可快速部署。

**核心特性**:
- ✅ **零配置启动**: 默认SQLite + 本地认证，自动初始化数据库
- 🔐 **本地认证**: 用户名密码认证（从环境变量配置）
- 💾 **SQLite 数据库**: 默认数据库，零配置启动
- 🔒 **安全加密**: bcrypt密码哈希（12轮salt）
- 📝 **完整CRUD**: 提示词增删改查 + 版本管理
- 🏷️ **标签系统**: 自动分类和统计
- 🔄 **版本控制**: 语义化版本 + 完整快照 + 一键回滚
- 🚀 **高性能**: 异步设计 + FastAPI + Uvicorn

## 技术栈

### 核心框架
- **Web框架**: FastAPI 0.109.0 (现代高性能异步框架)
- **ASGI服务器**: Uvicorn 0.27.0 (标准版包含性能优化)
- **API文档**: FastAPI 内置 (Swagger UI + ReDoc)

### 数据层
- **数据库**: SQLite 3
- **SQLite驱动**: aiosqlite 0.19.0

### 认证与安全
- **JWT**: PyJWT 2.8.0
- **密码加密**: bcrypt 4.1.2
- **加密**: cryptography 41.0.7

### 工具库
- **HTTP客户端**: requests 2.31.0 + httpx 0.25.2 (异步)
- **数据验证**: Pydantic (FastAPI内置)
- **配置管理**: python-dotenv 1.0.0

## 项目结构

```
backend/
├── main.py                    # FastAPI应用入口
├── run.py                     # 启动脚本
│
├── apps/                      # 应用主目录
│   ├── modules/              # 业务模块
│   │   ├── auth/            # 认证模块
│   │   │   ├── __init__.py
│   │   │   ├── models.py    # Pydantic数据模型（已废弃，使用views.py中的模型）
│   │   │   ├── services.py  # 业务逻辑
│   │   │   └── views.py    # API路由（FastAPI Router）
│   │   ├── prompts/         # 提示词模块
│   │   ├── tags/            # 标签模块
│   │   ├── versions/        # 版本管理模块
│   │   └── prompt_rules/    # 提示词规则模块
│   └── utils/                # 工具类
│       ├── db_adapter.py     # 数据库适配器（SQLite）
│       ├── db_utils.py       # 数据库工具
│       ├── jwt_utils.py      # JWT工具
│       ├── password_utils.py # 密码工具
│       ├── auth_middleware.py # 认证中间件（FastAPI依赖）
│       └── dependencies.py   # FastAPI依赖注入
│
├── config/                    # 配置文件
│   ├── __init__.py
│   ├── base.py               # 基础配置
│   ├── dev.py                # 开发环境配置
│   ├── prd.py                # 生产环境配置
│   └── settings.py           # 配置加载器
│
├── migrations/                # 数据库迁移脚本
│   └── init_sqlite.sql       # SQLite初始化脚本
│
├── data/                      # 数据目录
│   └── yprompt.db           # SQLite数据库文件（自动创建）
│
├── logs/                      # 日志目录
│   └── backend/
│       ├── info.log
│       └── error.log
│
├── requirements.txt           # Python依赖
└── README.md                  # 项目说明
```

## 快速开始

### 1. 安装依赖

```bash
cd backend
pip install -r requirements.txt
```

### 2. 配置（可选）

系统默认使用SQLite + 本地认证，无需配置即可启动。

如需自定义，可通过环境变量配置：

```bash
# 登录用户配置
export LOGIN_USERNAME=admin
export LOGIN_PASSWORD=admin123
export LOGIN_NAME=管理员

# JWT密钥（生产环境必须修改）
export SECRET_KEY=your-secret-key-here

# 数据库路径（可选）
export SQLITE_DB_PATH=../data/yprompt.db
```

### 3. 启动服务

```bash
python run.py
```

服务启动后访问：
- **API 地址**: http://localhost:8888
- **Swagger 文档**: http://localhost:8888/docs
- **ReDoc 文档**: http://localhost:8888/redoc

## 认证方式

### 本地用户名密码认证

系统通过环境变量配置登录用户信息，适用于私有部署。

**配置方式**：

```bash
# 环境变量
export LOGIN_USERNAME=admin
export LOGIN_PASSWORD=admin123

# 或 .env 文件
LOGIN_USERNAME=admin
LOGIN_PASSWORD=admin123
```

**API端点**：
- `POST /api/auth/local/login` - 用户名密码登录
- `POST /api/auth/refresh` - 刷新Token
- `GET /api/auth/userinfo` - 获取用户信息
- `GET /api/auth/config` - 获取认证配置

## 数据库配置

### SQLite（默认，零配置）

**优点**：
- ✅ 零配置，开箱即用
- ✅ 单文件存储，易于备份
- ✅ 适合个人使用和小团队
- ✅ 自动初始化数据库表

**配置**：

```python
# config/base.py 或环境变量
SQLITE_DB_PATH = '../data/yprompt.db'
```

**数据库文件位置**：`data/yprompt.db`

首次启动时会自动：
1. 创建数据库文件
2. 执行初始化脚本 `migrations/init_sqlite.sql`
3. 创建默认管理员账号（如果不存在）

## 开发指南

### 添加新模块

1. **创建模块目录**
```bash
mkdir apps/modules/your_module
touch apps/modules/your_module/{__init__.py,models.py,services.py,views.py}
```

2. **定义数据模型** (models.py)
```python
from pydantic import BaseModel

class YourModel(BaseModel):
    field1: str
    field2: int
```

3. **实现业务逻辑** (services.py)
```python
class YourService:
    def __init__(self, db):
        self.db = db
    
    async def get_data(self, id):
        return await self.db.get("SELECT * FROM table WHERE id = ?", [id])
```

4. **定义API路由** (views.py)
```python
from fastapi import APIRouter, Depends, HTTPException
from apps.utils.auth_middleware import get_current_user_id
from apps.utils.dependencies import get_db
from .services import YourService
from .models import YourModel

router = APIRouter(prefix='/api/your_module', tags=['模块名'])

@router.get('/{id}')
async def get_data(
    id: int,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    service = YourService(db)
    data = await service.get_data(id)
    if not data:
        raise HTTPException(status_code=404, detail='数据不存在')
    return {'code': 200, 'data': data}
```

5. **注册路由** (main.py)
```python
from apps.modules.your_module.views import router as your_module_router
app.include_router(your_module_router)
```

### 认证保护

```python
from apps.utils.auth_middleware import get_current_user_id
from apps.utils.dependencies import get_db

@router.get('/protected')
async def protected_route(
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    # user_id 是当前用户ID
    return {'user_id': user_id}
```

### 数据库操作

```python
# 查询单条
user = await db.get("SELECT * FROM users WHERE id = ?", [1])

# 查询多条
users = await db.query("SELECT * FROM users WHERE is_active = 1")

# 插入
user_id = await db.table_insert('users', {'name': '张三'})

# 更新
await db.table_update('users', {'name': '李四'}, "id = 1")

# 执行SQL
await db.execute("UPDATE users SET name = ? WHERE id = ?", ['李四', 1])
```

## API文档

FastAPI 自动生成交互式API文档：

- **Swagger UI**: http://localhost:8888/docs
- **ReDoc**: http://localhost:8888/redoc
- **OpenAPI JSON**: http://localhost:8888/openapi.json

## 生产部署

### 1. 修改配置

编辑 `config/prd.py` 或使用环境变量：

```bash
export SECRET_KEY=your-production-secret-key
export LOGIN_USERNAME=admin
export LOGIN_PASSWORD=your-secure-password
```

### 2. 启动生产服务

```bash
# 使用 uvicorn
uvicorn main:app --host 0.0.0.0 --port 8888 --workers 4

# 或使用 run.py
python run.py
```

### 3. 使用进程管理器

**Supervisor 配置示例**：

```ini
[program:yprompt]
command=/path/to/venv/bin/uvicorn main:app --host 0.0.0.0 --port 8888
directory=/path/to/backend
user=www-data
autostart=true
autorestart=true
```

**systemd 配置示例**：

```ini
[Unit]
Description=YPrompt Backend
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/backend
ExecStart=/path/to/venv/bin/uvicorn main:app --host 0.0.0.0 --port 8888
Restart=always

[Install]
WantedBy=multi-user.target
```

## 安全建议

1. **生产环境必须修改 SECRET_KEY**
2. **不要提交敏感配置到 Git**
3. **定期备份数据库**（SQLite 直接复制 `data/yprompt.db`）
4. **使用强密码**（至少8字符，包含字母和数字）
5. **启用HTTPS**（使用Nginx反向代理）

## 常见问题

### Q: SQLite 数据库在哪里？
A: 默认在 `backend/data/yprompt.db`

### Q: 如何备份 SQLite 数据库？
A: 直接复制 `data/yprompt.db` 文件即可

### Q: 如何重置数据库？
A: 删除 `data/yprompt.db` 文件，重启服务会自动重新初始化

### Q: 忘记管理员密码怎么办？
A: 通过环境变量重新设置 `LOGIN_PASSWORD`，重启服务会自动同步密码

### Q: 如何修改登录账号？
A: 通过环境变量 `LOGIN_USERNAME` 和 `LOGIN_PASSWORD` 配置，重启服务后生效

## 技术栈详情

- **FastAPI文档**: https://fastapi.tiangolo.com
- **Uvicorn文档**: https://www.uvicorn.org
- **Pydantic文档**: https://docs.pydantic.dev
- **SQLite文档**: https://www.sqlite.org

## License

MIT

## 联系方式

如有问题或建议，欢迎提交 Issue。
