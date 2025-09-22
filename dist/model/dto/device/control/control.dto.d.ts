import { LEDColor } from './type/control.type';
export declare class ControlRequestDto {
    command: string;
    onoff?: boolean;
    color?: string;
    frequency?: number;
    safetyField?: string;
}
export declare class ControlResponseDto extends ControlRequestDto {
}
export declare class ControlResponseSlamnav extends ControlResponseDto {
    id: string;
    result: string;
    message?: string;
}
export declare class ControlResponseFrs {
    robotSerial: string;
    data: ControlResponseDto;
}
export declare class LEDRequestDto {
    onoff: boolean;
    color?: LEDColor;
}
export declare class LEDResponseDto {
    onoff: boolean;
    color?: string;
    command: string;
}
export declare class OnOffRequestDto {
    command: string;
    onoff: boolean;
    frequency?: number;
}
export declare class OnOffResponseDto {
    command: string;
    onoff: boolean;
    frequency?: number;
}
export declare class WorkRequestDto {
    command: string;
}
export declare class WorkResponseDto {
    command: string;
}
export declare class SafetyFieldRequestDto {
    safetyField: string;
}
export declare class SafetyFieldResponseDto extends SafetyFieldRequestDto {
}
