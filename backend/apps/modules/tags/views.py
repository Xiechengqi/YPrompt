"""
标签路由（FastAPI）
处理标签的查询和创建
"""
from fastapi import APIRouter, Depends, HTTPException, Query
from pydantic import BaseModel
from typing import Optional, List
from loguru import logger

from apps.utils.auth_middleware import get_current_user_id
from apps.utils.dependencies import get_db
from .services import TagService

# 创建标签路由
router = APIRouter(prefix='/api/tags', tags=['标签'])


class CreateTagRequest(BaseModel):
    tag_name: str


@router.get('/')
async def get_tags(
    limit: int = Query(50, ge=1, le=100),
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """获取标签列表"""
    try:
        # 查询标签列表
        tag_service = TagService(db)
        tags_list = await tag_service.get_user_tags(user_id, limit)
        
        return {
            'code': 200,
            'data': tags_list
        }
        
    except Exception as e:
        logger.error(f'❌ 查询标签列表失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'查询失败: {str(e)}')


@router.post('/')
async def create_tag(
    request: CreateTagRequest,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """创建标签"""
    try:
        tag_name = request.tag_name.strip()
        
        # 参数验证
        if not tag_name:
            raise HTTPException(status_code=400, detail='标签名称不能为空')
        
        if len(tag_name) > 50:
            raise HTTPException(status_code=400, detail='标签名称不能超过50个字符')
        
        # 创建标签
        tag_service = TagService(db)
        tag = await tag_service.create_tag(user_id, tag_name)
        
        return {
            'code': 200,
            'message': '创建成功',
            'data': tag
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 创建标签失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'创建失败: {str(e)}')


@router.delete('/{tag_id}')
async def delete_tag(
    tag_id: int,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """删除标签"""
    try:
        # 删除标签
        tag_service = TagService(db)
        success = await tag_service.delete_tag(user_id, tag_id)
        
        if not success:
            raise HTTPException(status_code=403, detail='无权限删除或标签不存在')
        
        return {
            'code': 200,
            'message': '删除成功'
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 删除标签失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'删除失败: {str(e)}')


@router.get('/popular')
async def get_popular_tags(
    limit: int = Query(20, ge=1, le=50),
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """获取热门标签"""
    try:
        # 查询热门标签
        tag_service = TagService(db)
        tags_list = await tag_service.get_popular_tags(user_id, limit)
        
        return {
            'code': 200,
            'data': tags_list
        }
        
    except Exception as e:
        logger.error(f'❌ 查询热门标签失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'查询失败: {str(e)}')
