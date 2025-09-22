declare enum FootStatus {
    idle = 0,
    init = 1,
    moving = 2,
    emoStop = 3,
    upDone = 4,
    downDone = 5
}
export declare class ExAccessoryRequestDto {
    command: string;
    position: number;
}
export declare class ExAccessoryResponseDto extends ExAccessoryRequestDto {
}
export declare class ExAccessoryRequestExAccessory extends ExAccessoryRequestDto {
    id: string;
}
export declare class ExAccessoryResponseExAccessory extends ExAccessoryRequestExAccessory {
}
export declare class FootStatusDto {
    connection: boolean;
    position: number;
    is_down: boolean;
    foot_status: FootStatus;
}
export declare class TemperatureSensorStatusDto {
    connection: boolean;
    temperature_value: number;
}
export declare class ExAccessoryStatusDto {
    foot: FootStatusDto;
    temperature_sensor: TemperatureSensorStatusDto;
}
export {};
