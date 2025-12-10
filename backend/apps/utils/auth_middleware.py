"""
认证中间件（FastAPI 依赖）
用于保护需要登录的API接口
"""
from fastapi import Depends, HTTPException, Header
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from typing import Optional
from loguru import logger

from apps.utils.jwt_utils import JWTUtil

security = HTTPBearer()


async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """
    获取当前用户（FastAPI 依赖）
    
    使用方法:
        @router.get('/protected')
        async def protected_route(user_id: int = Depends(get_current_user)):
            # user_id 是当前登录用户的ID
            ...
    
    如果认证失败,抛出 HTTPException 401
    """
    token = credentials.credentials
    
    # 验证Token
    payload = JWTUtil.verify_token(token)
    
    if not payload:
        logger.warning(f'❌ Token无效或已过期')
        raise HTTPException(
            status_code=401,
            detail='Token无效或已过期,请重新登录'
        )
    
    user_id = payload.get('user_id')
    username = payload.get('username', payload.get('open_id', ''))
    
    logger.debug(f'✅ 认证成功: user_id={user_id}, username={username}')
    
    return {
        'user_id': user_id,
        'username': username
    }


async def get_current_user_id(current_user: dict = Depends(get_current_user)) -> int:
    """
    获取当前用户ID（简化版本）
    
    使用方法:
        @router.get('/protected')
        async def protected_route(user_id: int = Depends(get_current_user_id)):
            ...
    """
    return current_user['user_id']


async def get_optional_user(
    authorization: Optional[str] = Header(None)
) -> Optional[dict]:
    """
    可选认证依赖（FastAPI）
    
    如果有Token则验证,但不强制要求登录
    无论是否登录都会执行后续逻辑
    
    使用方法:
        @router.get('/public')
        async def public_route(user: Optional[dict] = Depends(get_optional_user)):
            if user:
                # 已登录用户的逻辑
                user_id = user['user_id']
            else:
                # 未登录用户的逻辑
                ...
    """
    if not authorization or not authorization.startswith('Bearer '):
        logger.debug('⚠️  可选认证: 未登录用户访问')
        return None
    
    token = authorization.split(' ')[1]
    payload = JWTUtil.verify_token(token)
    
    if payload:
        logger.debug(f'✅ 可选认证: 已登录用户访问 user_id={payload.get("user_id")}')
        return {
            'user_id': payload.get('user_id'),
            'username': payload.get('username', payload.get('open_id', ''))
        }
    else:
        logger.debug('⚠️  可选认证: Token无效,按未登录处理')
        return None


async def get_admin_user(current_user: dict = Depends(get_current_user)) -> dict:
    """
    管理员权限依赖（FastAPI）
    
    需要先经过get_current_user认证,再检查是否为管理员
    
    使用方法:
        @router.get('/admin')
        async def admin_route(admin_user: dict = Depends(get_admin_user)):
            # 只有管理员能访问
            user_id = admin_user['user_id']
            ...
    """
    user_id = current_user['user_id']
    
    # TODO: 这里需要查询数据库判断用户是否为管理员
    # 暂时简化实现,可以根据实际需求扩展
    
    # 示例: 假设user_id为1的是管理员
    if user_id != 1:
        logger.warning(f'❌ 权限不足: user_id={user_id} 尝试访问管理员接口')
        raise HTTPException(
            status_code=403,
            detail='权限不足,需要管理员权限'
        )
    
    logger.debug(f'✅ 管理员认证成功: user_id={user_id}')
    return current_user
