import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "cobot";
export interface CobotCommandRequest {
    cobotPort: string;
    command: string;
}
export interface CobotCommandResponse {
    cobotPort: string;
    command: string;
}
export declare const COBOT_PACKAGE_NAME = "cobot";
export interface CobotGrpcServiceClient {
    cobotCommand(request: CobotCommandRequest, metadata?: Metadata): Observable<CobotCommandResponse>;
}
export interface CobotGrpcServiceController {
    cobotCommand(request: CobotCommandRequest, metadata?: Metadata): Promise<CobotCommandResponse> | Observable<CobotCommandResponse> | CobotCommandResponse;
}
export declare function CobotGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const COBOT_GRPC_SERVICE_NAME = "CobotGrpcService";
