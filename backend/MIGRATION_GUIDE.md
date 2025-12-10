# Sanic 到 FastAPI 迁移指南

本文档记录了从 Sanic 框架迁移到 FastAPI 框架的详细变更。

## 迁移概述

YPrompt Backend 已从 Sanic 23.12.1 迁移到 FastAPI 0.109.0，主要变更包括：

- ✅ 框架从 Sanic 迁移到 FastAPI
- ✅ 路由从 Blueprint 迁移到 APIRouter
- ✅ 数据模型从 Sanic-Ext OpenAPI 组件迁移到 Pydantic BaseModel
- ✅ 认证中间件从装饰器迁移到 FastAPI 依赖注入
- ✅ 应用入口从 `apps/__init__.py` 迁移到 `main.py`
- ✅ 启动方式从 Sanic CLI 迁移到 Uvicorn

## 主要变更

### 1. 应用入口

**之前 (Sanic)**:
```python
# apps/__init__.py
from sanic import Sanic

def create_app():
    app = Sanic(__name__)
    # ... 配置
    return app

# run.py
from apps import create_app
app = create_app()
app.run(host=host, port=port)
```

**现在 (FastAPI)**:
```python
# main.py
from fastapi import FastAPI

app = FastAPI(title="YPrompt API")

# run.py
import uvicorn
uvicorn.run("main:app", host=host, port=port)
```

### 2. 路由定义

**之前 (Sanic)**:
```python
from sanic import Blueprint
from sanic.response import json
from apps.utils.auth_middleware import auth_required

auth = Blueprint('auth', url_prefix='/api/auth')

@auth.post('/local/login')
@auth_required
async def local_login(request):
    user_id = request.ctx.user_id
    data = request.json
    return json({'code': 200, 'data': data})
```

**现在 (FastAPI)**:
```python
from fastapi import APIRouter, Depends
from apps.utils.auth_middleware import get_current_user_id
from apps.utils.dependencies import get_db

router = APIRouter(prefix='/api/auth', tags=['认证'])

@router.post('/local/login')
async def local_login(
    request: LoginRequest,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    return {'code': 200, 'data': data}
```

### 3. 数据模型

**之前 (Sanic)**:
```python
from sanic_ext import openapi

@openapi.component
class LoginRequest:
    username: str = openapi.String(description="用户名", required=True)
    password: str = openapi.String(description="密码", required=True)
```

**现在 (FastAPI)**:
```python
from pydantic import BaseModel

class LoginRequest(BaseModel):
    username: str
    password: str
```

### 4. 认证中间件

**之前 (Sanic)**:
```python
from apps.utils.auth_middleware import auth_required

@router.get('/protected')
@auth_required
async def protected_route(request):
    user_id = request.ctx.user_id
    db = request.app.ctx.db
    # ...
```

**现在 (FastAPI)**:
```python
from apps.utils.auth_middleware import get_current_user_id
from apps.utils.dependencies import get_db

@router.get('/protected')
async def protected_route(
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    # ...
```

### 5. 数据库访问

**之前 (Sanic)**:
```python
# 通过 request.app.ctx.db 访问
db = request.app.ctx.db
user = await db.get("SELECT * FROM users WHERE id = ?", [user_id])
```

**现在 (FastAPI)**:
```python
# 通过依赖注入获取
from apps.utils.dependencies import get_db

@router.get('/users/{id}')
async def get_user(
    id: int,
    db = Depends(get_db)
):
    user = await db.get("SELECT * FROM users WHERE id = ?", [id])
    return user
```

### 6. 请求参数获取

**之前 (Sanic)**:
```python
# 查询参数
page = int(request.args.get('page', 1))
limit = int(request.args.get('limit', 10))

# 请求体
data = request.json
username = data.get('username')
```

**现在 (FastAPI)**:
```python
from fastapi import Query

# 查询参数（自动验证和转换）
@router.get('/items')
async def get_items(
    page: int = Query(1, ge=1),
    limit: int = Query(10, ge=1, le=100)
):
    # ...

# 请求体（自动验证）
@router.post('/login')
async def login(request: LoginRequest):
    username = request.username
    password = request.password
```

### 7. 响应返回

**之前 (Sanic)**:
```python
from sanic.response import json

return json({
    'code': 200,
    'message': '成功',
    'data': result
})
```

**现在 (FastAPI)**:
```python
# 直接返回字典（自动序列化为JSON）
return {
    'code': 200,
    'message': '成功',
    'data': result
}

# 或使用响应模型
@router.post('/login', response_model=LoginResponse)
async def login(request: LoginRequest):
    return LoginResponse(code=200, message='成功', data=result)
```

### 8. 异常处理

**之前 (Sanic)**:
```python
from sanic.response import json

if not user:
    return json({
        'code': 404,
        'message': '用户不存在'
    }, status=404)
```

**现在 (FastAPI)**:
```python
from fastapi import HTTPException

if not user:
    raise HTTPException(status_code=404, detail='用户不存在')
```

### 9. 静态文件服务

**之前 (Sanic)**:
```python
# apps/__init__.py
sanic_app.static('/assets', os.path.join(frontend_dist, 'assets'))
```

**现在 (FastAPI)**:
```python
# main.py
from fastapi.staticfiles import StaticFiles

app.mount("/assets", StaticFiles(directory=assets_path), name="assets")
```

### 10. CORS 配置

**之前 (Sanic)**:
```python
from sanic_ext import Extend

Extend(sanic_app)
sanic_app.config.CORS_ORIGINS = "*"
```

**现在 (FastAPI)**:
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 已删除的文件

- `backend/apps/__init__.py` - 旧的Sanic应用初始化文件（已被 `main.py` 替代）
- `backend/apps/modules/auth/models.py` - 旧的Sanic-Ext模型文件（已在 `views.py` 中使用Pydantic模型）

## 已更新的文件

### 核心文件
- `backend/main.py` - 新建，FastAPI应用入口
- `backend/run.py` - 更新，使用uvicorn启动
- `backend/requirements.txt` - 更新，移除Sanic依赖，添加FastAPI

### 工具文件
- `backend/apps/utils/db_utils.py` - 适配FastAPI生命周期
- `backend/apps/utils/jwt_utils.py` - 移除Sanic依赖
- `backend/apps/utils/auth_middleware.py` - 转换为FastAPI依赖注入
- `backend/apps/utils/dependencies.py` - 新建，数据库依赖注入

### 服务文件
所有 `services.py` 文件中的 logger 导入已从 `sanic.log` 更新为标准 `logging`：
- `backend/apps/modules/auth/services.py`
- `backend/apps/modules/prompts/services.py`
- `backend/apps/modules/tags/services.py`
- `backend/apps/modules/versions/services.py`
- `backend/apps/modules/prompt_rules/services.py`
- `backend/apps/utils/db_adapter.py`
- `backend/apps/utils/password_utils.py`
- `backend/apps/utils/http_utils.py`
- `backend/apps/utils/feishu_utils.py`

### 路由文件
所有 `views.py` 文件已从Sanic Blueprint转换为FastAPI Router：
- `backend/apps/modules/auth/views.py`
- `backend/apps/modules/prompts/views.py`
- `backend/apps/modules/tags/views.py`
- `backend/apps/modules/versions/views.py`
- `backend/apps/modules/prompt_rules/views.py`

### 模型文件
所有 `models.py` 文件已从Sanic-Ext OpenAPI组件转换为Pydantic BaseModel：
- `backend/apps/modules/prompts/models.py`
- `backend/apps/modules/versions/models.py`
- `backend/apps/modules/prompt_rules/models.py`

## 文档更新

- `backend/README.md` - 更新为FastAPI相关内容
- `backend/CLAUDE.md` - 完全重写，更新为FastAPI文档
- `CLAUDE.md` - 更新技术栈和开发指南
- `AGENTS.md` - 更新后端Agent描述

## 迁移检查清单

- [x] 删除 `apps/__init__.py`
- [x] 创建 `main.py` 作为FastAPI应用入口
- [x] 更新 `run.py` 使用uvicorn
- [x] 更新所有路由文件（Blueprint → Router）
- [x] 更新所有模型文件（Sanic-Ext → Pydantic）
- [x] 更新认证中间件（装饰器 → 依赖注入）
- [x] 更新数据库工具（app.ctx → app.state）
- [x] 更新所有logger导入（sanic.log → logging）
- [x] 更新requirements.txt
- [x] 更新所有文档

## 性能对比

FastAPI相比Sanic的优势：

1. **自动API文档**: FastAPI内置Swagger UI和ReDoc，无需额外配置
2. **数据验证**: Pydantic自动验证请求和响应数据
3. **类型提示**: 更好的IDE支持和类型检查
4. **标准兼容**: 基于ASGI标准，兼容更多中间件
5. **社区支持**: 更大的社区和更丰富的生态系统

## 后续优化建议

1. **添加更多Pydantic模型**: 为所有API端点定义响应模型
2. **添加请求限流**: 使用 `slowapi` 或 `fastapi-limiter`
3. **添加API版本控制**: 使用FastAPI的路由版本控制
4. **优化数据库查询**: 添加查询缓存
5. **添加单元测试**: 使用 `pytest` 和 `httpx` 测试客户端

## 参考资源

- [FastAPI官方文档](https://fastapi.tiangolo.com)
- [Uvicorn文档](https://www.uvicorn.org)
- [Pydantic文档](https://docs.pydantic.dev)
- [FastAPI最佳实践](https://github.com/zhanymkanov/fastapi-best-practices)
