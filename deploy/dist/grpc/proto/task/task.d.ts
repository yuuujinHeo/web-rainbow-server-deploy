import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "task";
export interface Empty {
}
export interface GetTaskStateResponse {
    mapName: string;
    taskName: string;
    taskId: number;
    running: boolean;
    connection?: boolean | undefined;
}
export interface GetTaskVariablesResponse {
    variables: Variable[];
}
export interface Variable {
    name: string;
    type: string;
}
export interface GetListRequest {
    mapName: string;
}
export interface GetListResponse {
    mapName: string;
    list: string[];
}
export interface taskNode {
    label: string;
    key?: string | undefined;
    icon?: string | undefined;
    data?: string | undefined;
    children: taskNode[];
}
export interface TaskRequest {
    command: string;
    mapName?: string | undefined;
    taskName?: string | undefined;
    data?: taskNode | undefined;
}
export interface TaskResponse {
    command: string;
    mapName?: string | undefined;
    taskName?: string | undefined;
    data?: taskNode | undefined;
}
export interface TaskFileRequest {
    mapName: string;
    taskName: string;
    data?: taskNode | undefined;
}
export interface TaskFileResponse {
    mapName: string;
    taskName: string;
    data?: taskNode | undefined;
}
export declare const TASK_PACKAGE_NAME = "task";
export interface TaskGrpcServiceClient {
    getTaskState(request: Empty, metadata?: Metadata): Observable<GetTaskStateResponse>;
    getTaskVariables(request: Empty, metadata?: Metadata): Observable<GetTaskVariablesResponse>;
    task(request: TaskRequest, metadata?: Metadata): Observable<TaskResponse>;
    getList(request: GetListRequest, metadata?: Metadata): Observable<GetListResponse>;
    getTask(request: TaskFileRequest, metadata?: Metadata): Observable<TaskFileResponse>;
    saveTask(request: TaskFileRequest, metadata?: Metadata): Observable<TaskFileResponse>;
    deleteTask(request: TaskFileRequest, metadata?: Metadata): Observable<TaskFileResponse>;
}
export interface TaskGrpcServiceController {
    getTaskState(request: Empty, metadata?: Metadata): Promise<GetTaskStateResponse> | Observable<GetTaskStateResponse> | GetTaskStateResponse;
    getTaskVariables(request: Empty, metadata?: Metadata): Promise<GetTaskVariablesResponse> | Observable<GetTaskVariablesResponse> | GetTaskVariablesResponse;
    task(request: TaskRequest, metadata?: Metadata): Promise<TaskResponse> | Observable<TaskResponse> | TaskResponse;
    getList(request: GetListRequest, metadata?: Metadata): Promise<GetListResponse> | Observable<GetListResponse> | GetListResponse;
    getTask(request: TaskFileRequest, metadata?: Metadata): Promise<TaskFileResponse> | Observable<TaskFileResponse> | TaskFileResponse;
    saveTask(request: TaskFileRequest, metadata?: Metadata): Promise<TaskFileResponse> | Observable<TaskFileResponse> | TaskFileResponse;
    deleteTask(request: TaskFileRequest, metadata?: Metadata): Promise<TaskFileResponse> | Observable<TaskFileResponse> | TaskFileResponse;
}
export declare function TaskGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const TASK_GRPC_SERVICE_NAME = "TaskGrpcService";
