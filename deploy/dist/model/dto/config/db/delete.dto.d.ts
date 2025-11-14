export declare class DeleteConfigRequestDto {
    key: string;
}
export declare class DeleteConfigsRequestDto {
    configs: DeleteConfigRequestDto[];
}
export declare class DeleteConfigResponseDto extends DeleteConfigRequestDto {
}
export declare class DeleteConfigsResponseDto extends DeleteConfigsRequestDto {
}
