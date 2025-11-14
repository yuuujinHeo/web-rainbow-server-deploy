export declare class SoundDto {
    fileName: string;
}
export declare class PlaySoundRequestDto extends SoundDto {
    volume: number;
    repeatCount: number;
    isWaitUntilDone: boolean;
}
export declare class PlaySoundResponseDto extends PlaySoundRequestDto {
}
export declare class StopSoundResponseDto extends PlaySoundRequestDto {
}
export declare class DeleteSoundRequestDto extends SoundDto {
}
export declare class DeleteSoundResponseDto extends DeleteSoundRequestDto {
}
export declare class SoundListResponseDto {
    list: string[];
}
