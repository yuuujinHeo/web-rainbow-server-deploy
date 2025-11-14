import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "user";
export interface ReadUserRequest {
    userId?: string | undefined;
    userPassword?: string | undefined;
    userName?: string | undefined;
    userStatus?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
}
export interface ReadUserForLoginRequest {
    userId?: string | undefined;
    userPassword?: string | undefined;
}
export interface ReadUserListRequest {
    pageNo?: number | undefined;
    pageSize?: number | undefined;
    searchType?: string | undefined;
    searchText?: string | undefined;
    userId?: string | undefined;
    userName?: string | undefined;
    userStatus?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    createdAtStart?: string | undefined;
    createdAtEnd?: string | undefined;
    updatedAtStart?: string | undefined;
    updatedAtEnd?: string | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
}
export interface ReadUserResponse {
    userId?: string | undefined;
    userName?: string | undefined;
    userStatus?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
}
export interface ReadUserListResponse {
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
    data: ReadUserListResponse_User[];
}
export interface ReadUserListResponse_User {
    userId: string;
    userName: string;
    userStatus: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}
export interface CreateUserRequest {
    userId: string;
    userPassword: string;
    userName?: string | undefined;
    userStatus?: string | undefined;
    createdAt: string;
    createdBy?: string | undefined;
}
export interface CreateUserResponse {
    userId: string;
    userName: string;
    userStatus: string;
    createdAt: string;
    createdBy: string;
}
export interface UpdateUserRequest {
    userId: string;
    data?: UpdateUserRequest_User | undefined;
}
export interface UpdateUserRequest_User {
    userId?: string | undefined;
    userPassword?: string | undefined;
    userName?: string | undefined;
    userStatus?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
}
export interface UpdateUserResponse {
    userId: string;
    userName: string;
    userStatus: string;
    updatedAt: string;
    updatedBy: string;
}
export interface DeleteUserRequest {
    userId: string;
}
export interface DeleteUserResponse {
    userId: string;
    userName: string;
    userStatus: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}
export interface ReadUserTokenRequest {
    userId?: string | undefined;
    refreshToken?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
}
export interface ReadUserTokenResponse {
    userId: string;
    refreshToken: string;
    refreshTokenExpires: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}
export interface CreateUserTokenRequest {
    userId: string;
    refreshToken: string;
    refreshTokenExpires: string;
    createdAt: string;
    createdBy?: string | undefined;
}
export interface CreateUserTokenResponse {
    userId: string;
    refreshToken: string;
    refreshTokenExpires: string;
    createdAt: string;
    createdBy: string;
}
export interface UpdateUserTokenRequest {
    userId: string;
    data?: UpdateUserTokenRequest_UserToken | undefined;
}
export interface UpdateUserTokenRequest_UserToken {
    userId?: string | undefined;
    refreshToken?: string | undefined;
    refreshTokenExpires?: string | undefined;
    updatedAt: string;
    updatedBy?: string | undefined;
}
export interface UpdateUserTokenResponse {
    userId: string;
    refreshToken: string;
    refreshTokenExpires: string;
    updatedAt: string;
    updatedBy: string;
}
export declare const USER_PACKAGE_NAME = "user";
export interface UserGrpcServiceClient {
    readUserList(request: ReadUserListRequest, metadata?: Metadata): Observable<ReadUserListResponse>;
    readUser(request: ReadUserRequest, metadata?: Metadata): Observable<ReadUserResponse>;
    readUserForLogin(request: ReadUserForLoginRequest, metadata?: Metadata): Observable<ReadUserResponse>;
    createUser(request: CreateUserRequest, metadata?: Metadata): Observable<CreateUserResponse>;
    updateUser(request: UpdateUserRequest, metadata?: Metadata): Observable<UpdateUserResponse>;
    deleteUser(request: DeleteUserRequest, metadata?: Metadata): Observable<DeleteUserResponse>;
    readUserToken(request: ReadUserTokenRequest, metadata?: Metadata): Observable<ReadUserTokenResponse>;
    createUserToken(request: CreateUserTokenRequest, metadata?: Metadata): Observable<CreateUserTokenResponse>;
    updateUserToken(request: UpdateUserTokenRequest, metadata?: Metadata): Observable<UpdateUserTokenResponse>;
}
export interface UserGrpcServiceController {
    readUserList(request: ReadUserListRequest, metadata?: Metadata): Promise<ReadUserListResponse> | Observable<ReadUserListResponse> | ReadUserListResponse;
    readUser(request: ReadUserRequest, metadata?: Metadata): Promise<ReadUserResponse> | Observable<ReadUserResponse> | ReadUserResponse;
    readUserForLogin(request: ReadUserForLoginRequest, metadata?: Metadata): Promise<ReadUserResponse> | Observable<ReadUserResponse> | ReadUserResponse;
    createUser(request: CreateUserRequest, metadata?: Metadata): Promise<CreateUserResponse> | Observable<CreateUserResponse> | CreateUserResponse;
    updateUser(request: UpdateUserRequest, metadata?: Metadata): Promise<UpdateUserResponse> | Observable<UpdateUserResponse> | UpdateUserResponse;
    deleteUser(request: DeleteUserRequest, metadata?: Metadata): Promise<DeleteUserResponse> | Observable<DeleteUserResponse> | DeleteUserResponse;
    readUserToken(request: ReadUserTokenRequest, metadata?: Metadata): Promise<ReadUserTokenResponse> | Observable<ReadUserTokenResponse> | ReadUserTokenResponse;
    createUserToken(request: CreateUserTokenRequest, metadata?: Metadata): Promise<CreateUserTokenResponse> | Observable<CreateUserTokenResponse> | CreateUserTokenResponse;
    updateUserToken(request: UpdateUserTokenRequest, metadata?: Metadata): Promise<UpdateUserTokenResponse> | Observable<UpdateUserTokenResponse> | UpdateUserTokenResponse;
}
export declare function UserGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const USER_GRPC_SERVICE_NAME = "UserGrpcService";
