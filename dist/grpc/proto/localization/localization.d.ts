import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "localization";
export interface InitRequest {
    command: string;
    x?: number | undefined;
    y?: number | undefined;
    z?: number | undefined;
    rz?: number | undefined;
    randomSeed?: string | undefined;
}
export interface InitResponse {
    command: string;
    x?: number | undefined;
    y?: number | undefined;
    z?: number | undefined;
    rz?: number | undefined;
    randomSeed?: string | undefined;
}
export declare const LOCALIZATION_PACKAGE_NAME = "localization";
export interface LocalizationGrpcServiceClient {
    init(request: InitRequest, metadata?: Metadata): Observable<InitResponse>;
    autoInit(request: InitRequest, metadata?: Metadata): Observable<InitResponse>;
    randomInit(request: InitRequest, metadata?: Metadata): Observable<InitResponse>;
    semiAutoInit(request: InitRequest, metadata?: Metadata): Observable<InitResponse>;
    start(request: InitRequest, metadata?: Metadata): Observable<InitResponse>;
    stop(request: InitRequest, metadata?: Metadata): Observable<InitResponse>;
}
export interface LocalizationGrpcServiceController {
    init(request: InitRequest, metadata?: Metadata): Promise<InitResponse> | Observable<InitResponse> | InitResponse;
    autoInit(request: InitRequest, metadata?: Metadata): Promise<InitResponse> | Observable<InitResponse> | InitResponse;
    randomInit(request: InitRequest, metadata?: Metadata): Promise<InitResponse> | Observable<InitResponse> | InitResponse;
    semiAutoInit(request: InitRequest, metadata?: Metadata): Promise<InitResponse> | Observable<InitResponse> | InitResponse;
    start(request: InitRequest, metadata?: Metadata): Promise<InitResponse> | Observable<InitResponse> | InitResponse;
    stop(request: InitRequest, metadata?: Metadata): Promise<InitResponse> | Observable<InitResponse> | InitResponse;
}
export declare function LocalizationGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const LOCALIZATION_GRPC_SERVICE_NAME = "LocalizationGrpcService";
