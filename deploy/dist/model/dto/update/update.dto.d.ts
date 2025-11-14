import { PaginationRequest, PaginationResponse } from '@app/common/pagination';
export declare class GetSoftwareParamDto {
    software: string;
}
export declare class CommitDto {
    sha: string;
    url: string;
    name: string;
    protected: boolean;
}
export declare class GetReleaseAppsBranchesRequestDto extends PaginationRequest {
    token: string;
}
export declare class ResponseReleaseAppsBranches {
    commit: CommitDto;
    name: string;
    protected: boolean;
}
export declare class GetReleaseAppBranchesResponseDto extends PaginationResponse<ResponseReleaseAppsBranches> {
}
export declare class GetReleaseAppsVersionListRequestDto {
    token: string;
    branch?: string;
    software: string;
}
export declare class ResponseReleaseVersionInfoDto {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    download_url: string;
    _links: {
        self: string;
        html: string;
        git: string;
    };
}
export declare class UpdateRequestDto {
    software: string;
    branch: string;
    version: string;
}
export declare class UpdateRequestSocketDto extends UpdateRequestDto {
    id: string;
}
export declare class UpdateResponseSocketDto extends UpdateRequestSocketDto {
    result: string;
    message?: string;
}
export declare class WebUIAppAddDto {
    appNames: string[];
    branch?: string;
    fo?: string;
}
export declare class WebUIAppDeleteDto {
    appNames: string[];
}
export declare class ResponseWebUIAppAddDto {
    appNames: string[];
    branch: string;
    fo: string;
}
export declare class ResponseWebUIAppDeleteDto {
    appNames: string[];
}
