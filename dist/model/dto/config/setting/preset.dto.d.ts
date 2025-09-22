import { PresetDto } from './type/preset.type';
export declare class GetPresetRequestDto {
    type: string;
    name: string;
}
export declare class GetPresetResponseDto extends GetPresetRequestDto {
    data: PresetDto;
}
export declare class SavePresetRequestDto extends GetPresetRequestDto {
    data: PresetDto;
}
export declare class SavePresetResponseDto extends SavePresetRequestDto {
}
export declare class DeletePresetRequestDto extends GetPresetRequestDto {
}
export declare class DeletePresetResponseDto extends DeletePresetRequestDto {
}
export declare class CreatePresetRequestDto extends GetPresetRequestDto {
}
export declare class CreatePresetResponseDto extends CreatePresetRequestDto {
}
export declare class GetPresetListRequestDto {
    type: string;
}
export declare class GetPresetListResponseDto extends GetPresetListRequestDto {
    list: string[];
}
