"""
版本管理数据模型（FastAPI Pydantic）
"""
from pydantic import BaseModel
from typing import Optional, List, Dict


class CreateVersionRequest(BaseModel):
    change_type: str  # major/minor/patch
    change_summary: str
    change_log: Optional[str] = None
    version_tag: Optional[str] = None  # draft/beta/stable/production


class VersionListItem(BaseModel):
    id: int
    version_number: str
    version_tag: Optional[str] = None
    version_type: str
    change_summary: str
    created_by: int
    author_name: Optional[str] = None
    author_avatar: Optional[str] = None
    content_size: Optional[int] = None
    use_count: int
    create_time: str


class VersionListData(BaseModel):
    total: int
    page: int
    limit: int
    items: List[VersionListItem]


class VersionListResponse(BaseModel):
    code: int = 200
    data: VersionListData


class CreateVersionData(BaseModel):
    version_id: int
    version_number: str
    create_time: str


class CreateVersionResponse(BaseModel):
    code: int = 200
    message: str = "版本创建成功"
    data: CreateVersionData


class VersionDetail(BaseModel):
    id: int
    prompt_id: int
    version_number: str
    version_tag: Optional[str] = None
    version_type: str
    title: str
    description: Optional[str] = None
    final_prompt: str
    change_log: Optional[str] = None
    change_summary: str
    change_type: str
    parent_version_id: Optional[int] = None
    created_by: int
    author_name: Optional[str] = None
    author_avatar: Optional[str] = None
    use_count: int
    content_size: Optional[int] = None
    create_time: str


class VersionDetailResponse(BaseModel):
    code: int = 200
    data: VersionDetail


class VersionCompareData(BaseModel):
    from_version: Dict
    to_version: Dict
    changes: Dict
    diff: Dict


class VersionCompareResponse(BaseModel):
    code: int = 200
    data: VersionCompareData


class RollbackRequest(BaseModel):
    change_summary: Optional[str] = None


class RollbackData(BaseModel):
    new_version: str
    rollback_to_version: str


class RollbackResponse(BaseModel):
    code: int = 200
    message: str = "回滚成功"
    data: RollbackData


class UpdateTagRequest(BaseModel):
    version_tag: str  # draft/beta/stable/production/archived


class SuccessResponse(BaseModel):
    code: int = 200
    message: str


class ErrorResponse(BaseModel):
    code: int
    message: str
