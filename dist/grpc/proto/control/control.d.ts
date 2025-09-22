import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "control";
export interface Empty {
}
export interface OnOffControlRequest {
    command: string;
    onoff: boolean;
    frequency?: number | undefined;
}
export interface OnOffControlResponse {
    command: string;
    onoff: boolean;
    frequency?: number | undefined;
}
export interface WorkControlRequest {
    command: string;
}
export interface WorkControlResponse {
    command: string;
}
export interface LEDControlRequest {
    command: string;
    onoff: boolean;
    color?: string | undefined;
}
export interface LEDControlResponse {
    command: string;
    onoff: boolean;
    color?: string | undefined;
}
export interface ExAccessoryControlRequest {
    command: string;
    pose?: string | undefined;
}
export interface ExAccessoryControlResponse {
    command: string;
    pose?: string | undefined;
}
export interface SafetyField {
    safetyField: string;
}
export declare const CONTROL_PACKAGE_NAME = "control";
export interface ControlGrpcServiceClient {
    onOffControl(request: OnOffControlRequest, metadata?: Metadata): Observable<OnOffControlResponse>;
    workControl(request: WorkControlRequest, metadata?: Metadata): Observable<WorkControlResponse>;
    ledControl(request: LEDControlRequest, metadata?: Metadata): Observable<LEDControlResponse>;
    setSafetyField(request: SafetyField, metadata?: Metadata): Observable<SafetyField>;
    getSafetyField(request: Empty, metadata?: Metadata): Observable<SafetyField>;
    exAccessoryControl(request: ExAccessoryControlRequest, metadata?: Metadata): Observable<ExAccessoryControlResponse>;
}
export interface ControlGrpcServiceController {
    onOffControl(request: OnOffControlRequest, metadata?: Metadata): Promise<OnOffControlResponse> | Observable<OnOffControlResponse> | OnOffControlResponse;
    workControl(request: WorkControlRequest, metadata?: Metadata): Promise<WorkControlResponse> | Observable<WorkControlResponse> | WorkControlResponse;
    ledControl(request: LEDControlRequest, metadata?: Metadata): Promise<LEDControlResponse> | Observable<LEDControlResponse> | LEDControlResponse;
    setSafetyField(request: SafetyField, metadata?: Metadata): Promise<SafetyField> | Observable<SafetyField> | SafetyField;
    getSafetyField(request: Empty, metadata?: Metadata): Promise<SafetyField> | Observable<SafetyField> | SafetyField;
    exAccessoryControl(request: ExAccessoryControlRequest, metadata?: Metadata): Promise<ExAccessoryControlResponse> | Observable<ExAccessoryControlResponse> | ExAccessoryControlResponse;
}
export declare function ControlGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const CONTROL_GRPC_SERVICE_NAME = "ControlGrpcService";
