import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "setting";
export interface SettingRequest {
    type: string;
    data?: string | undefined;
}
export interface SettingResponse {
    type: string;
    data?: string | undefined;
}
export interface PresetListRequest {
    type: string;
}
export interface PresetListResponse {
    type: string;
    list: string[];
}
export interface PresetRequest {
    type: string;
    name: string;
    data?: string | undefined;
}
export interface PresetResponse {
    type: string;
    name: string;
    data?: string | undefined;
}
export declare const SETTING_PACKAGE_NAME = "setting";
export interface SettingGrpcServiceClient {
    getSetting(request: SettingRequest, metadata?: Metadata): Observable<SettingResponse>;
    saveSetting(request: SettingRequest, metadata?: Metadata): Observable<SettingResponse>;
    getPresetList(request: PresetListRequest, metadata?: Metadata): Observable<PresetListResponse>;
    createPreset(request: PresetRequest, metadata?: Metadata): Observable<PresetResponse>;
    deletePreset(request: PresetRequest, metadata?: Metadata): Observable<PresetResponse>;
    getPreset(request: PresetRequest, metadata?: Metadata): Observable<PresetResponse>;
    savePreset(request: PresetRequest, metadata?: Metadata): Observable<PresetResponse>;
}
export interface SettingGrpcServiceController {
    getSetting(request: SettingRequest, metadata?: Metadata): Promise<SettingResponse> | Observable<SettingResponse> | SettingResponse;
    saveSetting(request: SettingRequest, metadata?: Metadata): Promise<SettingResponse> | Observable<SettingResponse> | SettingResponse;
    getPresetList(request: PresetListRequest, metadata?: Metadata): Promise<PresetListResponse> | Observable<PresetListResponse> | PresetListResponse;
    createPreset(request: PresetRequest, metadata?: Metadata): Promise<PresetResponse> | Observable<PresetResponse> | PresetResponse;
    deletePreset(request: PresetRequest, metadata?: Metadata): Promise<PresetResponse> | Observable<PresetResponse> | PresetResponse;
    getPreset(request: PresetRequest, metadata?: Metadata): Promise<PresetResponse> | Observable<PresetResponse> | PresetResponse;
    savePreset(request: PresetRequest, metadata?: Metadata): Promise<PresetResponse> | Observable<PresetResponse> | PresetResponse;
}
export declare function SettingGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const SETTING_GRPC_SERVICE_NAME = "SettingGrpcService";
