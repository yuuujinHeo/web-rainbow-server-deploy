import { PaginationRequest, PaginationResponse } from '@app/common/pagination';
export declare class SEMAlarmActive {
    code: number;
    state: string;
}
export declare class SEMAlarm {
    code: number;
    detail?: string;
    operationName: string;
    description?: string;
}
export declare class SEMAlarmLog extends SEMAlarm {
    state: string;
    createAt: string;
}
export declare class SEMAlamrListRequestDto extends PaginationRequest {
    code?: number;
}
export declare class SEMAlarmListResponseDto extends PaginationResponse<SEMAlarm> {
}
export declare class DeleteAlarmDefineRequestDto {
    code: number;
}
export declare class PostSEMAlarmRequestDto {
    code: number;
    state: string;
}
export declare class SEMAlarmLogListRequestDto extends PaginationRequest {
}
export declare class SEMAlarmLogResponseDto extends PaginationResponse<SEMAlarmActive> {
}
export declare class SEMAlarmActiveResponseDto {
    list: SEMAlarmActive[];
}
export declare class DeleteSEMAlarmRequestDto {
    code?: number;
    dateFrom?: string;
    dateTo?: string;
}
export declare class SaveSEMAlarmLogRequestDto {
    code: number;
    state: string;
}
export declare class SaveSEMAlarmLogResponseDto extends SaveSEMAlarmLogRequestDto {
}
export declare class SEMGeneralLogRequestDto {
    dateTo: string;
    dateFrom: string;
}
