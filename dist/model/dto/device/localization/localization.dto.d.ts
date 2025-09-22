export declare class LocalizationRequestDto {
    command: string;
    x?: number;
    y?: number;
    z?: number;
    rz?: number;
}
export declare class LocalizationResponseDto extends LocalizationRequestDto {
}
export declare class LocalizationResponseSlamnav extends LocalizationResponseDto {
    id: string;
    result: string;
    message?: string;
}
export declare class LocalizationResponseFrs {
    robotSerial: string;
    result: string;
    data: LocalizationResponseDto;
}
