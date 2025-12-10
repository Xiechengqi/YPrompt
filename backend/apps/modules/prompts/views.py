"""
提示词路由（FastAPI）
处理提示词的增删改查等操作
"""
from fastapi import APIRouter, Depends, HTTPException, Query
from typing import Optional
import logging

from apps.utils.auth_middleware import get_current_user_id
from apps.utils.dependencies import get_db
from .services import PromptService
from .models import *

logger = logging.getLogger(__name__)

# 创建提示词路由
router = APIRouter(prefix='/api/prompts', tags=['提示词'])


@router.post('/', response_model=SavePromptResponse)
async def save_prompt(
    request: SavePromptRequest,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """
    统一的保存接口
    
    逻辑:
    1. 如果data中有id且存在 -> 更新已有提示词 + 创建新版本(如果create_version=True)
    2. 如果没有id或id不存在 -> 创建新提示词 + 创建初始版本
    """
    try:
        # 参数验证
        if not request.title:
            raise HTTPException(status_code=400, detail='标题不能为空')
        
        if not request.final_prompt:
            raise HTTPException(status_code=400, detail='最终提示词不能为空')
        
        # 转换为字典
        data = request.dict(exclude_none=True)
        
        # 统一保存(自动判断新建还是更新)
        prompt_service = PromptService(db)
        result = await prompt_service.save_prompt(user_id, data)
        
        return SavePromptResponse(
            code=200,
            message=result.get('message', '保存成功'),
            data=SavePromptData(
                id=result.get('id'),
                create_time=result.get('create_time', ''),
                message=result.get('message')
            )
        )
        
    except ValueError as e:
        logger.warning(f'⚠️  参数错误: {e}')
        raise HTTPException(status_code=400, detail=str(e))
    except PermissionError as e:
        logger.warning(f'⚠️  权限错误: {e}')
        raise HTTPException(status_code=403, detail=str(e))
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 保存提示词失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'保存失败: {str(e)}')


@router.get('/', response_model=PromptListResponse)
async def get_prompts_list(
    page: int = Query(1, ge=1),
    limit: int = Query(10, ge=1, le=100),
    keyword: Optional[str] = Query(None),
    tag: Optional[str] = Query(None),
    is_favorite: Optional[str] = Query(None),
    sort: str = Query('create_time'),
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """获取提示词列表"""
    try:
        # 查询列表
        prompt_service = PromptService(db)
        result = await prompt_service.get_prompts_list(
            user_id, page, limit, keyword or '', tag or '', is_favorite or '', sort
        )
        
        # 转换标签格式（字符串转数组）
        items = []
        for item in result.get('items', []):
            item_dict = dict(item) if not isinstance(item, dict) else item
            if item_dict.get('tags'):
                item_dict['tags'] = [t.strip() for t in item_dict['tags'].split(',') if t.strip()]
            else:
                item_dict['tags'] = []
            items.append(PromptListItem(**item_dict))
        
        return PromptListResponse(
            code=200,
            data=PromptListData(
                total=result.get('total', 0),
                page=result.get('page', page),
                limit=result.get('limit', limit),
                items=items
            )
        )
        
    except Exception as e:
        logger.error(f'❌ 查询提示词列表失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'查询失败: {str(e)}')


@router.get('/{prompt_id}', response_model=PromptDetailResponse)
async def get_prompt_detail(
    prompt_id: int,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """获取提示词详情"""
    try:
        # 查询详情
        prompt_service = PromptService(db)
        prompt = await prompt_service.get_prompt_detail(user_id, prompt_id)
        
        if not prompt:
            raise HTTPException(status_code=404, detail='提示词不存在或无权限访问')
        
        # 增加查看次数
        await prompt_service.increase_view_count(prompt_id)
        
        return PromptDetailResponse(
            code=200,
            data=PromptInfo(**prompt)
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 查询提示词详情失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'查询失败: {str(e)}')


@router.put('/{prompt_id}', response_model=SuccessResponse)
async def update_prompt(
    prompt_id: int,
    request: SavePromptRequest,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """更新提示词"""
    try:
        data = request.dict(exclude_none=True)
        
        # 更新提示词
        prompt_service = PromptService(db)
        success = await prompt_service.update_prompt(user_id, prompt_id, data)
        
        if not success:
            raise HTTPException(status_code=403, detail='无权限修改或提示词不存在')
        
        return SuccessResponse(code=200, message='更新成功')
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 更新提示词失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'更新失败: {str(e)}')


@router.delete('/{prompt_id}', response_model=SuccessResponse)
async def delete_prompt(
    prompt_id: int,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """删除提示词"""
    try:
        # 删除提示词
        prompt_service = PromptService(db)
        success = await prompt_service.delete_prompt(user_id, prompt_id)
        
        if not success:
            raise HTTPException(status_code=403, detail='无权限删除或提示词不存在')
        
        return SuccessResponse(code=200, message='删除成功')
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 删除提示词失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'删除失败: {str(e)}')


@router.post('/{prompt_id}/favorite', response_model=SuccessResponse)
async def toggle_favorite(
    prompt_id: int,
    request: FavoriteRequest,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """收藏/取消收藏"""
    try:
        # 切换收藏状态
        prompt_service = PromptService(db)
        success = await prompt_service.toggle_favorite(user_id, prompt_id, request.is_favorite)
        
        if not success:
            raise HTTPException(status_code=403, detail='操作失败或提示词不存在')
        
        return SuccessResponse(code=200, message='操作成功')
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 操作收藏状态失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'操作失败: {str(e)}')


@router.post('/{prompt_id}/use', response_model=SuccessResponse)
async def record_use(
    prompt_id: int,
    user_id: int = Depends(get_current_user_id),
    db = Depends(get_db)
):
    """记录使用次数"""
    try:
        # 增加使用次数
        prompt_service = PromptService(db)
        success = await prompt_service.increase_use_count(user_id, prompt_id)
        
        if not success:
            raise HTTPException(status_code=404, detail='提示词不存在')
        
        return SuccessResponse(code=200, message='记录成功')
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f'❌ 记录使用次数失败: {e}', exc_info=True)
        raise HTTPException(status_code=500, detail=f'记录失败: {str(e)}')
