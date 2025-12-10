"""
版本管理路由（FastAPI）
处理提示词版本管理相关的API请求
"""
from fastapi import APIRouter, Depends, HTTPException, Query
from typing import Optional
import logging

from apps.utils.auth_middleware import get_current_user_id
from apps.utils.dependencies import get_db
from .services import VersionService
from .models import *

logger = logging.getLogger(__name__)

# 创建版本管理路由
router = APIRouter(prefix='/api/versions', tags=['版本管理'])


@router.post('/{prompt_id}', response_model=CreateVersionResponse)
async def create_version(
    prompt_id: int,
    request: CreateVersionRequest,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """创建新版本"""
    try:
        # 参数验证
        if request.change_type not in ['major', 'minor', 'patch']:
            raise HTTPException(status_code=400, detail='change_type必须是major、minor或patch')
        
        data = request.dict(exclude_none=True)
        
        # 创建版本
        version_service = VersionService(db)
        result = await version_service.create_version(prompt_id, user_id, data)
        
        return CreateVersionResponse(
            code=200,
            message='版本创建成功',
            data=CreateVersionData(
                version_id=result.get('version_id'),
                version_number=result.get('version_number'),
                create_time=result.get('create_time')
            )
        )
        
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 创建版本失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'创建失败: {str(e)}')


@router.get('/{prompt_id}/versions', response_model=VersionListResponse)
async def get_version_list(
    prompt_id: int,
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    tag: Optional[str] = Query(None),
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """获取版本列表"""
    try:
        # 查询列表
        version_service = VersionService(db)
        result = await version_service.get_version_history(
            prompt_id, user_id, page, limit, tag
        )
        
        items = [VersionListItem(**item) for item in result.get('items', [])]
        
        return VersionListResponse(
            code=200,
            data=VersionListData(
                total=result.get('total', 0),
                page=result.get('page', page),
                limit=result.get('limit', limit),
                items=items
            )
        )
        
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 获取版本列表失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'查询失败: {str(e)}')


@router.get('/{prompt_id}/versions/{version_id}', response_model=VersionDetailResponse)
async def get_version_detail(
    prompt_id: int,
    version_id: int,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """获取版本详情"""
    try:
        # 查询详情
        version_service = VersionService(db)
        version = await version_service.get_version_detail(prompt_id, user_id, version_id)
        
        return VersionDetailResponse(
            code=200,
            data=VersionDetail(**version)
        )
        
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 获取版本详情失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'查询失败: {str(e)}')


@router.get('/{prompt_id}/versions/compare', response_model=VersionCompareResponse)
async def compare_versions(
    prompt_id: int,
    from_version: int = Query(..., alias='from'),
    to_version: int = Query(..., alias='to'),
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """版本对比"""
    try:
        # 对比版本
        version_service = VersionService(db)
        result = await version_service.compare_versions(
            prompt_id, user_id, from_version, to_version
        )
        
        return VersionCompareResponse(
            code=200,
            data=VersionCompareData(**result)
        )
        
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 版本对比失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'对比失败: {str(e)}')


@router.post('/{prompt_id}/versions/{version_id}/rollback', response_model=RollbackResponse)
async def rollback_version(
    prompt_id: int,
    version_id: int,
    request: Optional[RollbackRequest] = None,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """回滚版本"""
    try:
        change_summary = request.change_summary if request else None
        
        # 回滚
        version_service = VersionService(db)
        result = await version_service.rollback_to_version(
            prompt_id, user_id, version_id, change_summary
        )
        
        return RollbackResponse(
            code=200,
            message='回滚成功',
            data=RollbackData(
                new_version=result.get('new_version'),
                rollback_to_version=result.get('rollback_to_version')
            )
        )
        
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 回滚失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'回滚失败: {str(e)}')


@router.put('/{prompt_id}/versions/{version_id}/tag', response_model=SuccessResponse)
async def update_version_tag(
    prompt_id: int,
    version_id: int,
    request: UpdateTagRequest,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """更新版本标签"""
    try:
        # 更新标签
        version_service = VersionService(db)
        await version_service.update_version_tag(
            prompt_id, user_id, version_id, request.version_tag
        )
        
        return SuccessResponse(code=200, message='标签更新成功')
        
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 更新标签失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'更新失败: {str(e)}')


@router.delete('/{prompt_id}/versions/{version_id}', response_model=SuccessResponse)
async def delete_version(
    prompt_id: int,
    version_id: int,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """删除版本"""
    try:
        # 删除版本
        version_service = VersionService(db)
        await version_service.delete_version(prompt_id, user_id, version_id)
        
        return SuccessResponse(code=200, message='版本删除成功')
        
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 删除版本失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'删除失败: {str(e)}')
