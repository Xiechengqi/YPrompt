# YPrompt Backend

提示词管理系统后端服务，基于 FastAPI 异步框架。

## 快速开始

### 1. 安装依赖

```bash
cd yprompt-backend
pip install -r requirements.txt
```

### 2. 配置数据库

**使用 SQLite（默认，零配置）**

默认配置已经设置为 SQLite，无需任何修改，启动后会自动创建 `data/yprompt.db` 数据库文件并初始化表结构。

### 3. 启动服务

```bash
python run.py
```

服务启动后访问：
- **API 地址**: http://localhost:8888
- **Swagger API 文档**: http://localhost:8888/docs
- **ReDoc API 文档**: http://localhost:8888/redoc

## 默认管理员账号

系统首次初始化时会自动创建管理员账号，账号信息可在配置文件中自定义。

**默认配置**（通过环境变量）：

```bash
LOGIN_USERNAME=admin
LOGIN_PASSWORD=admin123
LOGIN_NAME=管理员
```

**自定义登录账号**：

通过环境变量配置：

```bash
export LOGIN_USERNAME=myadmin
export LOGIN_PASSWORD=MySecure123
export LOGIN_NAME=系统管理员
```

或在 `.env` 文件中设置：

```env
LOGIN_USERNAME=myadmin
LOGIN_PASSWORD=MySecure123
LOGIN_NAME=系统管理员
```

**⚠️ 重要提示**：
- 首次启动时如果用户不存在，会自动创建管理员账号
- 每次启动时会自动同步密码（从环境变量）
- 建议生产环境使用强密码

## 认证方式

系统支持本地用户名密码认证：

### 本地用户名密码认证

系统通过环境变量配置登录用户信息，适用于私有部署，无需外部 OAuth 服务。

配置方式：在 `.env` 文件中设置 `LOGIN_USERNAME` 和 `LOGIN_PASSWORD`。

## 数据库配置详解

### SQLite（默认）

**优点**：
- ✅ 零配置，开箱即用
- ✅ 单文件存储，易于备份
- ✅ 适合个人使用和小团队
- ✅ 自动初始化数据库表

**配置**：

```python
# config/dev.py
SQLITE_DB_PATH = 'data/yprompt.db'  # SQLite数据库路径（可自定义）
```

**数据库文件位置**：`data/yprompt.db`


## 配置文件

- `config/base.py` - 基础配置
- `config/dev.py` - 开发环境配置（默认加载）
- `config/prd.py` - 生产环境配置

## 项目结构

```
yprompt-backend/
├── apps/                   # 应用代码
│   ├── modules/           # 业务模块
│   │   ├── auth/         # 认证模块
│   │   ├── prompts/      # 提示词管理
│   │   ├── tags/         # 标签管理
│   │   └── versions/     # 版本管理
│   └── utils/             # 工具类
│       ├── db_adapter.py  # 数据库适配器
│       ├── db_utils.py    # 数据库工具
│       ├── jwt_utils.py   # JWT工具
│       └── password_utils.py  # 密码工具
├── config/                # 配置文件
├── migrations/            # 数据库脚本
│   └── init_sqlite.sql   # SQLite初始化脚本（自动）
├── data/                  # 数据目录（SQLite）
│   └── yprompt.db        # SQLite数据库文件
├── logs/                  # 日志目录
├── requirements.txt       # Python依赖
└── run.py                # 启动入口
```

## API 文档

启动服务后访问 Swagger UI：http://localhost:8888/docs

主要 API 端点：

**认证相关**：
- `POST /api/auth/local/login` - 本地用户名密码登录
- `POST /api/auth/refresh` - 刷新 Token
- `GET /api/auth/userinfo` - 获取用户信息
- `GET /api/auth/config` - 获取认证配置
- `POST /api/auth/logout` - 用户登出

**提示词相关**：
- `POST /api/prompts` - 创建提示词
- `GET /api/prompts` - 获取提示词列表
- `GET /api/prompts/{id}` - 获取提示词详情
- `PUT /api/prompts/{id}` - 更新提示词
- `DELETE /api/prompts/{id}` - 删除提示词

## 开发说明

### 安装开发依赖

```bash
pip install -r requirements.txt
```

### 启动开发服务器（自动重载）

```bash
python run.py
```

### 数据库迁移

如果修改了数据库结构，需要：

1. 更新 `migrations/init_sqlite.sql`
2. 更新 `migrations/init_sqlite.sql` (SQLite)
3. 删除现有数据库重新初始化，或手动执行迁移语句

### 切换数据库

系统仅支持 SQLite 数据库，无需配置数据库类型。

## 生产部署

### 1. 修改配置

编辑 `config/prd.py`：

```python
# 使用环境变量
import os

# SQLite配置（仅支持 SQLite）
SECRET_KEY = os.getenv('SECRET_KEY')  # 必须修改
```

### 2. 启动生产服务

```bash
# 使用环境变量配置
export SECRET_KEY=your-secret-key-here
export LOGIN_USERNAME=admin
export LOGIN_PASSWORD=your-secure-password

# 启动服务（使用 uvicorn）
python run.py

# 或直接使用 uvicorn
uvicorn main:app --host 0.0.0.0 --port 8888
```

### 3. 使用进程管理器

```bash
# Supervisor 或 systemd
# 参考项目文档配置
```

## 安全建议

1. **生产环境必须修改 SECRET_KEY**
2. **不要提交敏感配置到 Git**
3. **定期备份数据库**（SQLite 直接复制 `data/yprompt.db`）
4. **限制注册功能**（修改 `auth/views.py`）

## 常见问题

### Q: SQLite 数据库在哪里？
A: 默认在 `yprompt-backend/data/yprompt.db`

### Q: 如何备份 SQLite 数据库？
A: 直接复制 `data/yprompt.db` 文件即可

### Q: 如何重置数据库？
A: 删除 `data/yprompt.db` 文件，重启服务会自动重新初始化

### Q: 忘记管理员密码怎么办？
A: 
- **方法1（推荐）**: 通过环境变量重新设置 `LOGIN_PASSWORD`，重启服务会自动同步密码
- **方法2**: 删除数据库文件 `data/yprompt.db`，重启服务会自动重新初始化

### Q: 如何修改登录账号？
A: 通过环境变量 `LOGIN_USERNAME` 和 `LOGIN_PASSWORD` 配置，重启服务后生效

## 技术栈

- **Web 框架**: FastAPI 0.109.0 (现代高性能异步框架)
- **ASGI 服务器**: Uvicorn 0.27.0
- **数据库**: SQLite 3 (aiosqlite)
- **认证**: JWT (PyJWT) + bcrypt 密码加密
- **API 文档**: FastAPI 内置 (Swagger UI + ReDoc)
- **数据验证**: Pydantic

## License

MIT

## 联系方式

如有问题或建议，欢迎提交 Issue。
