import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "config";
export interface Empty {
}
export interface GetConfigRequest {
    key: string;
}
export interface GetConfigResponse {
    key: string;
    value?: string | undefined;
}
export interface SetConfigRequest {
    key: string;
    value: string;
}
export interface SetConfigResponse {
    key: string;
    value: string;
}
export interface SetConfigsRequest {
    configs: SetConfigRequest[];
}
export interface SetConfigsResponse {
    configs: SetConfigRequest[];
}
export interface GetConfigsResponse {
    configs: GetConfigResponse[];
}
export interface DeleteConfigRequest {
    key: string;
}
export interface DeleteConfigResponse {
    key: string;
}
export interface DeleteConfigsRequest {
    configs: DeleteConfigRequest[];
}
export interface DeleteConfigsResponse {
    configs: DeleteConfigRequest[];
}
export declare const CONFIG_PACKAGE_NAME = "config";
export interface ConfigGrpcServiceClient {
    getConfig(request: GetConfigRequest, metadata?: Metadata): Observable<GetConfigResponse>;
    setConfig(request: SetConfigRequest, metadata?: Metadata): Observable<SetConfigResponse>;
    getConfigAll(request: Empty, metadata?: Metadata): Observable<GetConfigsResponse>;
    setConfigs(request: SetConfigsRequest, metadata?: Metadata): Observable<SetConfigsResponse>;
    deleteConfig(request: DeleteConfigRequest, metadata?: Metadata): Observable<DeleteConfigResponse>;
    deleteConfigs(request: DeleteConfigsRequest, metadata?: Metadata): Observable<DeleteConfigsResponse>;
}
export interface ConfigGrpcServiceController {
    getConfig(request: GetConfigRequest, metadata?: Metadata): Promise<GetConfigResponse> | Observable<GetConfigResponse> | GetConfigResponse;
    setConfig(request: SetConfigRequest, metadata?: Metadata): Promise<SetConfigResponse> | Observable<SetConfigResponse> | SetConfigResponse;
    getConfigAll(request: Empty, metadata?: Metadata): Promise<GetConfigsResponse> | Observable<GetConfigsResponse> | GetConfigsResponse;
    setConfigs(request: SetConfigsRequest, metadata?: Metadata): Promise<SetConfigsResponse> | Observable<SetConfigsResponse> | SetConfigsResponse;
    deleteConfig(request: DeleteConfigRequest, metadata?: Metadata): Promise<DeleteConfigResponse> | Observable<DeleteConfigResponse> | DeleteConfigResponse;
    deleteConfigs(request: DeleteConfigsRequest, metadata?: Metadata): Promise<DeleteConfigsResponse> | Observable<DeleteConfigsResponse> | DeleteConfigsResponse;
}
export declare function ConfigGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const CONFIG_GRPC_SERVICE_NAME = "ConfigGrpcService";
