import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "sound";
export interface Empty {
}
export interface PlayRequest {
    fileName: string;
    volume: number;
    repeatCount: number;
    isWaitUntilDone: boolean;
}
export interface PlayResponse {
    fileName: string;
    volume: number;
    repeatCount: number;
    isWaitUntilDone: boolean;
}
export interface ListResponse {
    list: string[];
}
export interface DeleteRequest {
    fileName: string;
}
export interface DeleteResponse {
    fileName: string;
}
export declare const SOUND_PACKAGE_NAME = "sound";
export interface SoundGrpcServiceClient {
    play(request: PlayRequest, metadata?: Metadata): Observable<PlayResponse>;
    stop(request: Empty, metadata?: Metadata): Observable<Empty>;
    list(request: Empty, metadata?: Metadata): Observable<ListResponse>;
    delete(request: DeleteRequest, metadata?: Metadata): Observable<DeleteResponse>;
    getPlaying(request: Empty, metadata?: Metadata): Observable<PlayResponse>;
}
export interface SoundGrpcServiceController {
    play(request: PlayRequest, metadata?: Metadata): Promise<PlayResponse> | Observable<PlayResponse> | PlayResponse;
    stop(request: Empty, metadata?: Metadata): Promise<Empty> | Observable<Empty> | Empty;
    list(request: Empty, metadata?: Metadata): Promise<ListResponse> | Observable<ListResponse> | ListResponse;
    delete(request: DeleteRequest, metadata?: Metadata): Promise<DeleteResponse> | Observable<DeleteResponse> | DeleteResponse;
    getPlaying(request: Empty, metadata?: Metadata): Promise<PlayResponse> | Observable<PlayResponse> | PlayResponse;
}
export declare function SoundGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const SOUND_GRPC_SERVICE_NAME = "SoundGrpcService";
