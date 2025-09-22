import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "log";
export interface Empty {
}
export interface SEMAlarm {
    code: number;
    detail?: string | undefined;
    operationName: string;
    description?: string | undefined;
}
export interface SEMAlarmActive {
    code: number;
    state: string;
}
export interface SEMAlarmLog {
    code: number;
    detail?: string | undefined;
    operationName: string;
    description?: string | undefined;
    state: string;
    createAt: string;
}
export interface GetSEMAlarmDefineRequest {
    pageNo?: number | undefined;
    pageSize?: number | undefined;
    searchText?: string | undefined;
    searchType?: string | undefined;
    sortOption?: string | undefined;
    sortDirection?: string | undefined;
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
}
export interface GetSEMAlarmDefineResponse {
    list: SEMAlarm[];
    pageSize?: number | undefined;
    totalCount?: number | undefined;
    totalPage?: number | undefined;
}
export interface PostSEMAlarmDefineRequest {
    code: number;
    detail?: string | undefined;
    operationName: string;
    description?: string | undefined;
}
export interface DeleteSEMAlarmDefineRequest {
    code: number;
}
export interface DeleteSEMAlarmDefineResponse {
    code: number;
    detail?: string | undefined;
    operationName: string;
    description?: string | undefined;
}
export interface GetSEMAlarmActiveResponse {
    list: SEMAlarmActive[];
}
export interface SEMAlarmRequest {
    code: number;
    detail?: string | undefined;
    state: string;
}
export interface SEMAlarmResponse {
    code: number;
    detail?: string | undefined;
    state: string;
    operationName: string;
    description?: string | undefined;
    createAt: string;
}
export interface GetSEMAlarmLogRequest {
    pageNo?: number | undefined;
    pageSize?: number | undefined;
    searchText?: string | undefined;
    searchType?: string | undefined;
    sortOption?: string | undefined;
    sortDirection?: string | undefined;
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
}
export interface GetSEMAlarmLogResponse {
    list: SEMAlarmLog[];
    pageSize?: number | undefined;
    totalCount?: number | undefined;
    totalPage?: number | undefined;
}
export interface PostSEMAlarmRequest {
    code: number;
    state: string;
}
export interface PostSEMAlarmResponse {
    code: number;
    state: string;
}
export interface DeleteSEMAlarmRequest {
    code?: number | undefined;
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
}
export interface DeleteSEMAlarmResponse {
}
export interface SEMGeneralLogRequest {
    date: string;
}
export interface SEMGeneralLogResponse {
    date: string;
}
export interface GetSEMGeneralLogResponse {
    data: string;
}
export interface DeleteSEMGeneralLogRequest {
    dateFrom: string;
    dateTo: string;
}
export interface DeleteSEMGeneralLogResponse {
}
export interface PostSEMGeneralLogRequest {
    scope: string;
    operationName: string;
    operationStatus: string;
    data?: string | undefined;
}
export interface PostSEMGeneralLogResponse {
    scope: string;
    operationName: string;
    operationStatus: string;
    data?: string | undefined;
}
export declare const LOG_PACKAGE_NAME = "log";
export interface SEMLogGrpcServiceClient {
    getSemAlarmDefine(request: GetSEMAlarmDefineRequest, metadata?: Metadata): Observable<GetSEMAlarmDefineResponse>;
    postSemAlarmDefine(request: PostSEMAlarmDefineRequest, metadata?: Metadata): Observable<PostSEMAlarmDefineRequest>;
    deleteSemAlarmDefine(request: DeleteSEMAlarmDefineRequest, metadata?: Metadata): Observable<DeleteSEMAlarmDefineResponse>;
    deleteSemAlarmDefineAll(request: Empty, metadata?: Metadata): Observable<Empty>;
    getSemAlarmActive(request: Empty, metadata?: Metadata): Observable<GetSEMAlarmActiveResponse>;
    semAlarm(request: SEMAlarmRequest, metadata?: Metadata): Observable<SEMAlarmResponse>;
    deleteSemAlarm(request: DeleteSEMAlarmRequest, metadata?: Metadata): Observable<DeleteSEMAlarmResponse>;
    deleteSemAlarmAll(request: Empty, metadata?: Metadata): Observable<DeleteSEMAlarmResponse>;
    getSemAlarmLog(request: GetSEMAlarmLogRequest, metadata?: Metadata): Observable<GetSEMAlarmLogResponse>;
    postSemAlarmLog(request: PostSEMAlarmRequest, metadata?: Metadata): Observable<PostSEMAlarmResponse>;
    deleteSemAlarmLog(request: DeleteSEMAlarmRequest, metadata?: Metadata): Observable<DeleteSEMAlarmResponse>;
    getSemGeneralLog(request: SEMGeneralLogRequest, metadata?: Metadata): Observable<GetSEMGeneralLogResponse>;
    deleteSemGeneralLog(request: DeleteSEMGeneralLogRequest, metadata?: Metadata): Observable<DeleteSEMGeneralLogResponse>;
    postSemGeneralLog(request: PostSEMGeneralLogRequest, metadata?: Metadata): Observable<PostSEMGeneralLogResponse>;
}
export interface SEMLogGrpcServiceController {
    getSemAlarmDefine(request: GetSEMAlarmDefineRequest, metadata?: Metadata): Promise<GetSEMAlarmDefineResponse> | Observable<GetSEMAlarmDefineResponse> | GetSEMAlarmDefineResponse;
    postSemAlarmDefine(request: PostSEMAlarmDefineRequest, metadata?: Metadata): Promise<PostSEMAlarmDefineRequest> | Observable<PostSEMAlarmDefineRequest> | PostSEMAlarmDefineRequest;
    deleteSemAlarmDefine(request: DeleteSEMAlarmDefineRequest, metadata?: Metadata): Promise<DeleteSEMAlarmDefineResponse> | Observable<DeleteSEMAlarmDefineResponse> | DeleteSEMAlarmDefineResponse;
    deleteSemAlarmDefineAll(request: Empty, metadata?: Metadata): Promise<Empty> | Observable<Empty> | Empty;
    getSemAlarmActive(request: Empty, metadata?: Metadata): Promise<GetSEMAlarmActiveResponse> | Observable<GetSEMAlarmActiveResponse> | GetSEMAlarmActiveResponse;
    semAlarm(request: SEMAlarmRequest, metadata?: Metadata): Promise<SEMAlarmResponse> | Observable<SEMAlarmResponse> | SEMAlarmResponse;
    deleteSemAlarm(request: DeleteSEMAlarmRequest, metadata?: Metadata): Promise<DeleteSEMAlarmResponse> | Observable<DeleteSEMAlarmResponse> | DeleteSEMAlarmResponse;
    deleteSemAlarmAll(request: Empty, metadata?: Metadata): Promise<DeleteSEMAlarmResponse> | Observable<DeleteSEMAlarmResponse> | DeleteSEMAlarmResponse;
    getSemAlarmLog(request: GetSEMAlarmLogRequest, metadata?: Metadata): Promise<GetSEMAlarmLogResponse> | Observable<GetSEMAlarmLogResponse> | GetSEMAlarmLogResponse;
    postSemAlarmLog(request: PostSEMAlarmRequest, metadata?: Metadata): Promise<PostSEMAlarmResponse> | Observable<PostSEMAlarmResponse> | PostSEMAlarmResponse;
    deleteSemAlarmLog(request: DeleteSEMAlarmRequest, metadata?: Metadata): Promise<DeleteSEMAlarmResponse> | Observable<DeleteSEMAlarmResponse> | DeleteSEMAlarmResponse;
    getSemGeneralLog(request: SEMGeneralLogRequest, metadata?: Metadata): Promise<GetSEMGeneralLogResponse> | Observable<GetSEMGeneralLogResponse> | GetSEMGeneralLogResponse;
    deleteSemGeneralLog(request: DeleteSEMGeneralLogRequest, metadata?: Metadata): Promise<DeleteSEMGeneralLogResponse> | Observable<DeleteSEMGeneralLogResponse> | DeleteSEMGeneralLogResponse;
    postSemGeneralLog(request: PostSEMGeneralLogRequest, metadata?: Metadata): Promise<PostSEMGeneralLogResponse> | Observable<PostSEMGeneralLogResponse> | PostSEMGeneralLogResponse;
}
export declare function SEMLogGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const SEM_LOG_GRPC_SERVICE_NAME = "SEMLogGrpcService";
