export declare class GetConfigRequestDto {
    key: string;
}
export declare class GetConfigResponseDto {
    key: string;
    value?: string;
}
export declare class GetConfigsResponseDto {
    configs: GetConfigResponseDto[];
}
