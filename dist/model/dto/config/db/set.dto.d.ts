export declare class SetConfigRequestDto {
    key: string;
    value: string;
}
export declare class SetConfigsRequestDto {
    configs: SetConfigRequestDto[];
}
export declare class SetConfigResponseDto extends SetConfigRequestDto {
}
export declare class SetConfigsResponseDto extends SetConfigsRequestDto {
}
