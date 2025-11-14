import { SettingDto } from './type/setting.type';
export declare class GetSettingRequestDto {
    type: string;
}
export declare class GetSettingResponseDto {
    type: string;
    data?: SettingDto;
}
export declare class SaveSettingRequestDto {
    type: string;
    data: SettingDto;
}
export declare class SaveSettingResponseDto extends SaveSettingRequestDto {
}
