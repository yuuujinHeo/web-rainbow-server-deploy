import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "auth";
export interface JoinUserRequest {
    userId: string;
    userPassword: string;
    userName?: string | undefined;
    userStatus?: string | undefined;
    createdAt: string;
    createdBy?: string | undefined;
}
export interface JoinUserResponse {
    userId: string;
    userName: string;
    userStatus: string;
    createdAt: string;
    createdBy: string;
}
export interface LoginUserRequest {
    userId: string;
    userPassword: string;
}
export interface LoginUserResponse {
    accessToken?: string | undefined;
    refreshToken?: string | undefined;
    user: LoginUserResponse_User | undefined;
}
export interface LoginUserResponse_User {
    userId?: string | undefined;
    userName?: string | undefined;
    userStatus?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
}
export interface RefreshTokenRequest {
    refreshToken: string;
}
export interface RefreshTokenResponse {
    accessToken: string;
}
export declare const AUTH_PACKAGE_NAME = "auth";
export interface AuthGrpcServiceClient {
    join(request: JoinUserRequest, metadata?: Metadata): Observable<JoinUserResponse>;
    login(request: LoginUserRequest, metadata?: Metadata): Observable<LoginUserResponse>;
    refreshToken(request: RefreshTokenRequest, metadata?: Metadata): Observable<RefreshTokenResponse>;
}
export interface AuthGrpcServiceController {
    join(request: JoinUserRequest, metadata?: Metadata): Promise<JoinUserResponse> | Observable<JoinUserResponse> | JoinUserResponse;
    login(request: LoginUserRequest, metadata?: Metadata): Promise<LoginUserResponse> | Observable<LoginUserResponse> | LoginUserResponse;
    refreshToken(request: RefreshTokenRequest, metadata?: Metadata): Promise<RefreshTokenResponse> | Observable<RefreshTokenResponse> | RefreshTokenResponse;
}
export declare function AuthGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_GRPC_SERVICE_NAME = "AuthGrpcService";
