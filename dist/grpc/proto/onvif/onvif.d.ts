import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';
export declare const protobufPackage = "onvif";
export interface ServiceRequest {
    data: string;
}
export interface ServiceResponse {
    data: string;
}
export declare const ONVIF_PACKAGE_NAME = "onvif";
export interface OnvifServiceClient {
    deviceService(request: ServiceRequest, metadata?: Metadata): Observable<ServiceResponse>;
    mediaService(request: ServiceRequest, metadata?: Metadata): Observable<ServiceResponse>;
    snapshot(request: ServiceRequest, metadata?: Metadata): Observable<ServiceResponse>;
    ptzService(request: ServiceRequest, metadata?: Metadata): Observable<ServiceResponse>;
    deviceIoService(request: ServiceRequest, metadata?: Metadata): Observable<ServiceResponse>;
    eventService(request: ServiceRequest, metadata?: Metadata): Observable<ServiceResponse>;
}
export interface OnvifServiceController {
    deviceService(request: ServiceRequest, metadata?: Metadata): Promise<ServiceResponse> | Observable<ServiceResponse> | ServiceResponse;
    mediaService(request: ServiceRequest, metadata?: Metadata): Promise<ServiceResponse> | Observable<ServiceResponse> | ServiceResponse;
    snapshot(request: ServiceRequest, metadata?: Metadata): Promise<ServiceResponse> | Observable<ServiceResponse> | ServiceResponse;
    ptzService(request: ServiceRequest, metadata?: Metadata): Promise<ServiceResponse> | Observable<ServiceResponse> | ServiceResponse;
    deviceIoService(request: ServiceRequest, metadata?: Metadata): Promise<ServiceResponse> | Observable<ServiceResponse> | ServiceResponse;
    eventService(request: ServiceRequest, metadata?: Metadata): Promise<ServiceResponse> | Observable<ServiceResponse> | ServiceResponse;
}
export declare function OnvifServiceControllerMethods(): (constructor: Function) => void;
export declare const ONVIF_SERVICE_NAME = "OnvifService";
