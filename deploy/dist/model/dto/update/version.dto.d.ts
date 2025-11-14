export declare class GetNewVersionRequestDto {
    software: string;
    branch?: string;
}
export declare class GetNewVersionResponseDto extends GetNewVersionRequestDto {
    version?: string;
    hotfix?: boolean;
}
export declare class GetCurrentVersionRequestDto {
    software: string;
}
export declare class GetCurrentVersionResponseDto extends GetCurrentVersionRequestDto {
    version: string;
    branch: string;
}
export declare class GetCurrentVersionRequestSocketDto {
    id: string;
}
export declare class GetCurrentVersionResponseSocketDto extends GetCurrentVersionRequestSocketDto {
    version: string;
    branch: string;
}
