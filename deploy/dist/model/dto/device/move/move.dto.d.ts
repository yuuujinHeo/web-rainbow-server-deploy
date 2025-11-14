import { SearchRequestDto } from '@app/common/pagination/search.request';
import { PaginationResponse } from '@app/common/pagination';
import { MoveLog } from '@app/common/grpc/proto/move';
export declare class MoveRequestDto {
    command: string;
    goalId?: string;
    method?: string;
    preset?: number;
    x?: number;
    y?: number;
    z?: number;
    rz?: number;
    vx?: number;
    vy?: number;
    wz?: number;
}
export declare class MoveGoalCommandDto {
    goalId: string;
    method?: string;
    preset?: number;
}
export declare class MoveTargetCommandDto {
    method?: string;
    preset?: number;
    x: number;
    y: number;
    z: number;
    rz: number;
}
export declare class MoveResponseDto extends MoveRequestDto {
}
export declare class MoveResponseSlamnav extends MoveResponseDto {
    id: string;
    result: string;
    message?: string;
}
export declare class MoveResponseFrs {
    robotSerial: string;
    data: MoveResponseDto;
}
export declare class MoveLogRequestDto extends SearchRequestDto {
}
export declare class MoveLogResponseDto extends PaginationResponse<MoveLog> {
}
export declare class MoveLogLastRequestDto {
    num: number;
    command?: string;
}
export declare class MoveLogLastResponseDto {
    list: MoveLog[];
}
