export declare class PingSendToTargetDto {
    target: string;
}
export declare class PingSendToTargetResponseDto extends PingSendToTargetDto {
    message?: string;
    stdout?: string;
    stderr?: string;
}
export declare class NewVersionGitDto {
    hotfix: boolean;
    new_version: string;
}
export declare class CurVersionDto {
    current: string;
}
