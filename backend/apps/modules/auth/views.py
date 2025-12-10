"""
认证路由（FastAPI）
支持本地用户名密码认证
"""
from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional
from loguru import logger

from apps.utils.jwt_utils import JWTUtil
from apps.utils.auth_middleware import get_current_user, get_current_user_id
from apps.utils.dependencies import get_db
from .services import AuthService
from config.settings import Config

# 创建认证路由
router = APIRouter(prefix='/api/auth', tags=['认证'])


# ====================================
# 请求/响应模型
# ====================================

class LoginRequest(BaseModel):
    username: str
    password: str


class LoginResponse(BaseModel):
    code: int = 200
    message: str = "登录成功"
    data: Optional[dict] = None


class ErrorResponse(BaseModel):
    code: int
    message: str


class RefreshTokenResponse(BaseModel):
    code: int = 200
    message: str = "刷新成功"
    data: Optional[dict] = None


class UserInfo(BaseModel):
    id: int
    name: str
    username: str
    avatar: str
    email: Optional[str] = None
    auth_type: str
    is_active: int
    is_admin: int
    last_login_time: Optional[str] = None
    create_time: Optional[str] = None


# ====================================
# 本地用户名密码认证
# ====================================

@router.post('/local/login', response_model=LoginResponse)
async def local_login(request: LoginRequest, fastapi_request: Request, db = Depends(get_db)):
    """
    本地用户名密码登录接口
    
    用于私有部署场景，从环境变量配置的用户信息验证
    """
    try:
        username = request.username.strip()
        password = request.password
        
        # 1. 参数验证
        if not username or not password:
            raise HTTPException(
                status_code=400,
                detail='用户名和密码不能为空'
            )
        
        # 2. 验证用户名和密码（从环境变量配置）
        auth_service = AuthService(db)
        user = await auth_service.verify_local_user(
            username, 
            password,
            Config.LOGIN_USERNAME,
            Config.LOGIN_PASSWORD
        )
        
        if not user:
            raise HTTPException(
                status_code=400,
                detail='用户名或密码错误'
            )
        
        # 3. 生成JWT Token
        token = JWTUtil.generate_token(
            user['id'],
            username,  # 使用username作为标识
            expire_hours=24*7  # 7天有效期
        )
        
        # 4. 返回响应
        logger.info(f'✅ 本地用户登录成功: username={username}, id={user["id"]}')
        
        return LoginResponse(
            code=200,
            message='登录成功',
            data={
                'token': token,
                'user': {
                    'id': user['id'],
                    'name': user['name'],
                    'username': username,
                    'avatar': user.get('avatar', ''),
                    'auth_type': 'local',
                    'is_admin': user.get('is_admin', 0),
                    'last_login_time': str(user.get('last_login_time', ''))
                }
            }
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 本地登录接口异常: {e}', exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f'登录失败: {str(e)}'
        )


# ====================================
# 通用接口
# ====================================

@router.post('/refresh', response_model=RefreshTokenResponse)
async def refresh_token(
    current_user: dict = Depends(get_current_user)
):
    """
    刷新Token接口
    
    通过旧Token生成新Token,延长登录状态
    """
    try:
        # 从依赖获取用户信息
        user_id = current_user['user_id']
        username = current_user['username']
        
        # 生成新Token
        new_token = JWTUtil.generate_token(
            user_id,
            username,
            expire_hours=24*7  # 7天有效期
        )
        
        return RefreshTokenResponse(
            code=200,
            message='刷新成功',
            data={'token': new_token}
        )
        
    except Exception as e:
        logger.error(f'❌ 刷新Token失败: {e}')
        raise HTTPException(
            status_code=500,
            detail=f'刷新失败: {str(e)}'
        )


@router.get('/userinfo', response_model=dict)
async def get_userinfo(
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """
    获取当前用户信息接口
    
    需要在请求头中携带有效的JWT Token
    """
    try:
        # 查询用户信息
        auth_service = AuthService(db)
        user = await auth_service.get_user_by_id(user_id)
        
        if not user:
            raise HTTPException(
                status_code=404,
                detail='用户不存在'
            )
        
        return {
            'code': 200,
            'data': {
                'id': user['id'],
                'name': user['name'],
                'username': user.get('username', ''),
                'avatar': user.get('avatar', ''),
                'email': user.get('email', ''),
                'auth_type': user.get('auth_type', 'local'),
                'is_active': user.get('is_active', 1),
                'is_admin': user.get('is_admin', 0),
                'last_login_time': str(user.get('last_login_time', '')),
                'create_time': str(user.get('create_time', ''))
            }
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 获取用户信息失败: {e}')
        raise HTTPException(
            status_code=500,
            detail=f'获取失败: {str(e)}'
        )


@router.post('/logout')
async def logout(
    current_user: dict = Depends(get_current_user)
):
    """
    用户登出接口
    
    由于使用JWT,服务端无状态,实际登出由客户端清除Token实现
    此接口仅用于记录日志
    """
    try:
        user_id = current_user['user_id']
        logger.info(f'📤 用户登出: user_id={user_id}')
        
        return {
            'code': 200,
            'message': '登出成功'
        }
        
    except Exception as e:
        logger.error(f'❌ 登出接口异常: {e}')
        raise HTTPException(
            status_code=500,
            detail=f'登出失败: {str(e)}'
        )


# ====================================
# 系统信息接口
# ====================================

@router.get('/config')
async def get_auth_config():
    """
    获取认证配置接口
    
    前端可以根据此接口返回的配置决定显示哪些登录选项
    返回登录用户名用于前端预填充
    """
    try:
        return {
            'code': 200,
            'data': {
                'local_auth_enabled': True,  # 本地认证始终可用
                'login_username': Config.LOGIN_USERNAME  # 返回配置的用户名
            }
        }
        
    except Exception as e:
        logger.error(f'❌ 获取认证配置失败: {e}')
        raise HTTPException(
            status_code=500,
            detail=f'获取配置失败: {str(e)}'
        )
