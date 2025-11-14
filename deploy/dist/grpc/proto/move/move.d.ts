import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "move";
export interface Empty {
}
export interface MoveLog {
    id: string;
    command: string;
    status: string;
    mapName?: string | undefined;
    goalId?: string | undefined;
    goalName?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
    rz?: number | undefined;
    vx?: number | undefined;
    vy?: number | undefined;
    wz?: number | undefined;
    time?: string | undefined;
}
export interface MoveLogLastRequest {
    num: number;
    command?: string | undefined;
}
export interface MoveLogLastResponse {
    list: MoveLog[];
}
export interface MoveLogRequest {
    pageNo?: number | undefined;
    pageSize?: number | undefined;
    searchText?: string | undefined;
    searchType?: string | undefined;
    sortOption?: string | undefined;
    sortDirection?: string | undefined;
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
}
export interface MoveLogResponse {
    list: MoveLog[];
    pageSize?: number | undefined;
    totalCount?: number | undefined;
    totalPage?: number | undefined;
}
export interface MoveCommandResquest {
    command: string;
    method?: string | undefined;
    preset?: number | undefined;
    goalId?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
    z?: number | undefined;
    rz?: number | undefined;
    vx?: number | undefined;
    vy?: number | undefined;
    wz?: number | undefined;
}
export interface MoveCommandResponse {
    command: string;
    method?: string | undefined;
    preset?: number | undefined;
    goalId?: string | undefined;
    x?: number | undefined;
    y?: number | undefined;
    z?: number | undefined;
    rz?: number | undefined;
    vx?: number | undefined;
    vy?: number | undefined;
    wz?: number | undefined;
}
export declare const MOVE_PACKAGE_NAME = "move";
export interface MoveGrpcServiceClient {
    moveCommand(request: MoveCommandResquest, metadata?: Metadata): Observable<MoveCommandResponse>;
    moveGoal(request: MoveCommandResquest, metadata?: Metadata): Observable<MoveCommandResponse>;
    moveTarget(request: MoveCommandResquest, metadata?: Metadata): Observable<MoveCommandResponse>;
    moveJog(request: MoveCommandResquest, metadata?: Metadata): Observable<Empty>;
    movePause(request: Empty, metadata?: Metadata): Observable<Empty>;
    moveResume(request: Empty, metadata?: Metadata): Observable<Empty>;
    moveStop(request: Empty, metadata?: Metadata): Observable<Empty>;
    moveLastGoal(request: Empty, metadata?: Metadata): Observable<Empty>;
    moveLogLast(request: MoveLogLastRequest, metadata?: Metadata): Observable<MoveLogLastResponse>;
    moveLog(request: MoveLogRequest, metadata?: Metadata): Observable<MoveLogResponse>;
}
export interface MoveGrpcServiceController {
    moveCommand(request: MoveCommandResquest, metadata?: Metadata): Promise<MoveCommandResponse> | Observable<MoveCommandResponse> | MoveCommandResponse;
    moveGoal(request: MoveCommandResquest, metadata?: Metadata): Promise<MoveCommandResponse> | Observable<MoveCommandResponse> | MoveCommandResponse;
    moveTarget(request: MoveCommandResquest, metadata?: Metadata): Promise<MoveCommandResponse> | Observable<MoveCommandResponse> | MoveCommandResponse;
    moveJog(request: MoveCommandResquest, metadata?: Metadata): Promise<Empty> | Observable<Empty> | Empty;
    movePause(request: Empty, metadata?: Metadata): Promise<Empty> | Observable<Empty> | Empty;
    moveResume(request: Empty, metadata?: Metadata): Promise<Empty> | Observable<Empty> | Empty;
    moveStop(request: Empty, metadata?: Metadata): Promise<Empty> | Observable<Empty> | Empty;
    moveLastGoal(request: Empty, metadata?: Metadata): Promise<Empty> | Observable<Empty> | Empty;
    moveLogLast(request: MoveLogLastRequest, metadata?: Metadata): Promise<MoveLogLastResponse> | Observable<MoveLogLastResponse> | MoveLogLastResponse;
    moveLog(request: MoveLogRequest, metadata?: Metadata): Promise<MoveLogResponse> | Observable<MoveLogResponse> | MoveLogResponse;
}
export declare function MoveGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const MOVE_GRPC_SERVICE_NAME = "MoveGrpcService";
