import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "amr";
export interface ReadAmrRequest {
    amrSerial?: string | undefined;
    amrType?: string | undefined;
    amrName?: string | undefined;
    amrIpAddress?: string | undefined;
    amrUri?: string | undefined;
    amrApproveYn?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
}
export interface ReadAmrListRequest {
    pageNo?: number | undefined;
    pageSize?: number | undefined;
    searchType?: string | undefined;
    searchText?: string | undefined;
    amrSerial?: string | undefined;
    amrType?: string | undefined;
    amrName?: string | undefined;
    amrIpAddress?: string | undefined;
    amrUri?: string | undefined;
    amrApproveYn?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    createdAtStart?: string | undefined;
    createdAtEnd?: string | undefined;
    updatedAtStart?: string | undefined;
    updatedAtEnd?: string | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
}
export interface ReadAmrResponse {
    amrSerial?: string | undefined;
    amrType?: string | undefined;
    amrName?: string | undefined;
    amrIpAddress?: string | undefined;
    amrUri?: string | undefined;
    amrApproveYn?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
}
export interface ReadAmrListResponse {
    pageNo: number;
    pageSize: number;
    totalCount: number;
    totalPage: number;
    searchType?: string | undefined;
    searchText?: string | undefined;
    createdAtStart?: string | undefined;
    createdAtEnd?: string | undefined;
    updatedAtStart?: string | undefined;
    updatedAtEnd?: string | undefined;
    data: ReadAmrListResponse_Amr[];
}
export interface ReadAmrListResponse_Amr {
    amrSerial: string;
    amrType: string;
    amrName: string;
    amrIpAddress: string;
    amrUri: string;
    amrApproveYn: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}
export interface CreateAmrRequest {
    amrSerial: string;
    amrType: string;
    amrName: string;
    amrIpAddress?: string | undefined;
    amrUri?: string | undefined;
    amrApproveYn: string;
    createdAt: string;
    createdBy?: string | undefined;
}
export interface CreateAmrResponse {
    amrSerial: string;
    amrType: string;
    amrName: string;
    amrIpAddress: string;
    amrUri: string;
    amrApproveYn: string;
    createdAt: string;
    createdBy: string;
}
export interface UpdateAmrRequest {
    amrSerial: string;
    data?: UpdateAmrRequest_Amr | undefined;
}
export interface UpdateAmrRequest_Amr {
    robotSerial?: string | undefined;
    amrType?: string | undefined;
    amrName?: string | undefined;
    amrIpAddress?: string | undefined;
    amrUri?: string | undefined;
    amrApproveYn?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
}
export interface UpdateAmrResponse {
    amrSerial: string;
    amrType: string;
    amrName: string;
    amrIpAddress: string;
    amrUri: string;
    amrApproveYn: string;
    updatedAt: string;
    updatedBy: string;
}
export interface DeleteAmrRequest {
    amrSerial: string;
}
export interface DeleteAmrResponse {
    amrSerial: string;
    amrType: string;
    amrName: string;
    amrIpAddress: string;
    amrUri: string;
    amrApproveYn: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}
export declare const AMR_PACKAGE_NAME = "amr";
export interface AmrGrpcServiceClient {
    readAmrList(request: ReadAmrListRequest, metadata?: Metadata): Observable<ReadAmrListResponse>;
    readAmr(request: ReadAmrRequest, metadata?: Metadata): Observable<ReadAmrResponse>;
    createAmr(request: CreateAmrRequest, metadata?: Metadata): Observable<CreateAmrResponse>;
    updateAmr(request: UpdateAmrRequest, metadata?: Metadata): Observable<UpdateAmrResponse>;
    deleteAmr(request: DeleteAmrRequest, metadata?: Metadata): Observable<DeleteAmrResponse>;
}
export interface AmrGrpcServiceController {
    readAmrList(request: ReadAmrListRequest, metadata?: Metadata): Promise<ReadAmrListResponse> | Observable<ReadAmrListResponse> | ReadAmrListResponse;
    readAmr(request: ReadAmrRequest, metadata?: Metadata): Promise<ReadAmrResponse> | Observable<ReadAmrResponse> | ReadAmrResponse;
    createAmr(request: CreateAmrRequest, metadata?: Metadata): Promise<CreateAmrResponse> | Observable<CreateAmrResponse> | CreateAmrResponse;
    updateAmr(request: UpdateAmrRequest, metadata?: Metadata): Promise<UpdateAmrResponse> | Observable<UpdateAmrResponse> | UpdateAmrResponse;
    deleteAmr(request: DeleteAmrRequest, metadata?: Metadata): Promise<DeleteAmrResponse> | Observable<DeleteAmrResponse> | DeleteAmrResponse;
}
export declare function AmrGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const AMR_GRPC_SERVICE_NAME = "AmrGrpcService";
