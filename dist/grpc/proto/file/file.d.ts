import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "file";
export interface ReadFileListRequest {
    pageNo: number;
    pageSize: number;
    searchType?: string | undefined;
    searchText?: string | undefined;
    parentFolderId?: string | undefined;
    fileType?: string | undefined;
    status?: string | undefined;
    createdAtStart?: string | undefined;
    createdAtEnd?: string | undefined;
    updatedAtStart?: string | undefined;
    updatedAtEnd?: string | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    tags: string[];
}
export interface ReadFileRequest {
    fileId: string;
}
export interface CreateFileRequest {
    fileName: string;
    originalName: string;
    filePath: string;
    fileSize: number;
    fileType?: string | undefined;
    mimeType?: string | undefined;
    fileExtension?: string | undefined;
    checksum?: string | undefined;
    storageType?: string | undefined;
    storageLocation?: string | undefined;
    parentFolderId?: string | undefined;
    isDirectory?: boolean | undefined;
    createdBy: string;
    metadata: FileMetadata[];
    tags: string[];
}
export interface UpdateFileRequest {
    fileId: string;
    data?: UpdateFileRequest_FileUpdateData | undefined;
}
export interface UpdateFileRequest_FileUpdateData {
    fileName?: string | undefined;
    parentFolderId?: string | undefined;
    status?: string | undefined;
    updatedBy?: string | undefined;
    metadata: FileMetadata[];
    tags: string[];
}
export interface DeleteFileRequest {
    fileId: string;
    permanentDelete?: boolean | undefined;
}
export interface UploadFileRequest {
    fileName: string;
    originalName: string;
    fileContent: Uint8Array;
    parentFolderId?: string | undefined;
    uploadedBy: string;
    metadata: FileMetadata[];
    tags: string[];
}
export interface DownloadFileRequest {
    fileId: string;
    versionNumber?: number | undefined;
}
export interface GetFileVersionsRequest {
    fileId: string;
    pageNo?: number | undefined;
    pageSize?: number | undefined;
}
export interface FileMetadata {
    key: string;
    value: string;
    dataType?: string | undefined;
}
export interface FileInfo {
    fileId: string;
    fileName: string;
    originalName: string;
    filePath: string;
    fileSize: number;
    fileType: string;
    mimeType: string;
    fileExtension: string;
    checksum: string;
    storageType: string;
    storageLocation: string;
    parentFolderId: string;
    isDirectory: boolean;
    status: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    metadata: FileMetadata[];
    tags: string[];
}
export interface ReadFileListResponse {
    pageNo: number;
    pageSize: number;
    totalCount: number;
    totalPage: number;
    searchType?: string | undefined;
    searchText?: string | undefined;
    data: FileInfo[];
}
export interface ReadFileResponse {
    fileInfo: FileInfo | undefined;
}
export interface CreateFileResponse {
    fileId: string;
    message: string;
}
export interface UpdateFileResponse {
    fileId: string;
    message: string;
}
export interface DeleteFileResponse {
    fileId: string;
    message: string;
}
export interface UploadFileResponse {
    fileId: string;
    fileName: string;
    fileSize: number;
    message: string;
}
export interface DownloadFileResponse {
    fileId: string;
    fileName: string;
    mimeType: string;
    fileContent: Uint8Array;
}
export declare const FILE_PACKAGE_NAME = "file";
export interface FileGrpcServiceClient {
    readFileList(request: ReadFileListRequest, metadata?: Metadata): Observable<ReadFileListResponse>;
    readFile(request: ReadFileRequest, metadata?: Metadata): Observable<ReadFileResponse>;
    createFile(request: CreateFileRequest, metadata?: Metadata): Observable<CreateFileResponse>;
    updateFile(request: UpdateFileRequest, metadata?: Metadata): Observable<UpdateFileResponse>;
    deleteFile(request: DeleteFileRequest, metadata?: Metadata): Observable<DeleteFileResponse>;
    uploadFile(request: UploadFileRequest, metadata?: Metadata): Observable<UploadFileResponse>;
    downloadFile(request: DownloadFileRequest, metadata?: Metadata): Observable<DownloadFileResponse>;
}
export interface FileGrpcServiceController {
    readFileList(request: ReadFileListRequest, metadata?: Metadata): Promise<ReadFileListResponse> | Observable<ReadFileListResponse> | ReadFileListResponse;
    readFile(request: ReadFileRequest, metadata?: Metadata): Promise<ReadFileResponse> | Observable<ReadFileResponse> | ReadFileResponse;
    createFile(request: CreateFileRequest, metadata?: Metadata): Promise<CreateFileResponse> | Observable<CreateFileResponse> | CreateFileResponse;
    updateFile(request: UpdateFileRequest, metadata?: Metadata): Promise<UpdateFileResponse> | Observable<UpdateFileResponse> | UpdateFileResponse;
    deleteFile(request: DeleteFileRequest, metadata?: Metadata): Promise<DeleteFileResponse> | Observable<DeleteFileResponse> | DeleteFileResponse;
    uploadFile(request: UploadFileRequest, metadata?: Metadata): Promise<UploadFileResponse> | Observable<UploadFileResponse> | UploadFileResponse;
    downloadFile(request: DownloadFileRequest, metadata?: Metadata): Promise<DownloadFileResponse> | Observable<DownloadFileResponse> | DownloadFileResponse;
}
export declare function FileGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const FILE_GRPC_SERVICE_NAME = "FileGrpcService";
