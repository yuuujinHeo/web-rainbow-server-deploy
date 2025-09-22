import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "host";
export interface MapInfo {
    fileName: string;
    createAt?: string | undefined;
    updateAt?: string | undefined;
    fileType?: string | undefined;
    cloudFiles: FileInfo[];
    topoFiles: FileInfo[];
}
export interface FileInfo {
    fileName: string;
    createAt?: string | undefined;
    updateAt?: string | undefined;
    fileType?: string | undefined;
}
export interface ReadMapRequest {
    mapName: string;
    fileName: string;
}
export interface ReadMapResponse {
    mapNAme: string;
    fileName: string;
    data?: Uint8Array | undefined;
}
export interface ReadFileListRequest {
    path: string;
    pageNo?: number | undefined;
    pageSize?: number | undefined;
}
export interface ReadFileListResponse {
    list: FileInfo[];
    pageSize?: number | undefined;
    totalCount?: number | undefined;
    totalPage?: number | undefined;
}
export interface ReadMapListRequest {
    pageNo?: number | undefined;
    pageSize?: number | undefined;
    searchType?: string | undefined;
    searchText?: string | undefined;
    sortOption?: string | undefined;
    sortDirection?: string | undefined;
}
export interface ReadMapListResponse {
    list: MapInfo[];
    pageSize?: number | undefined;
    totalCount?: number | undefined;
    totalPage?: number | undefined;
}
export interface ReadFileRequest {
    path: string;
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
export interface TestPingRequest {
    target: string;
}
export interface TestPingResponse {
    target: string;
    message?: string | undefined;
    stdout?: string | undefined;
    stderr?: string | undefined;
}
export interface GetNewVersionRequest {
    software: string;
    branch?: string | undefined;
}
export interface GetNewVersionResponse {
    software: string;
    branch?: string | undefined;
    newVersion?: string | undefined;
    hotfix?: boolean | undefined;
}
export interface GetCurrentVersionRequest {
    software: string;
}
export interface GetCurrentVersionResponse {
    software: string;
    version: string;
}
export interface GetReleaseBranchRequest {
    token: string;
    pageNo?: number | undefined;
    pageSize?: number | undefined;
}
export interface Commit {
    sha: string;
    url: string;
    name: string;
    protected: boolean;
}
export interface Branch {
    commit: Commit | undefined;
    name: string;
    protected: boolean;
}
export interface GetReleaseBranchResponse {
    list: Branch[];
    pageSize?: number | undefined;
    totalCount?: number | undefined;
    totalPage?: number | undefined;
}
export interface GetReleaseVersionRequest {
    software: string;
    token: string;
    branch?: string | undefined;
}
export interface VersionLinks {
    self: string;
    html: string;
    git: string;
}
export interface ReleaseVersion {
    name: string;
    path: string;
    sha: string;
    url: string;
    size: number;
    downloadUrl: string;
    Links: VersionLinks | undefined;
}
export interface GetReleaseVersionResponse {
    list: ReleaseVersion[];
}
export interface AddWebUIRequest {
    appNames: string[];
    branch?: string | undefined;
    fo?: string | undefined;
}
export interface AddWebUIResponse {
    appNames: string[];
    branch?: string | undefined;
    fo?: string | undefined;
}
export interface DeleteWebUIRequest {
    appNames: string[];
}
export interface DeleteWebUIResponse {
    appNames: string[];
}
export interface UpdateProgramRequest {
    software: string;
    branch: string;
    version?: string | undefined;
}
export interface UpdateProgramResponse {
    software: string;
    branch: string;
    version?: string | undefined;
}
export declare const HOST_PACKAGE_NAME = "host";
export interface HostMapGrpcServiceClient {
    readMapList(request: ReadMapListRequest, metadata?: Metadata): Observable<ReadMapListResponse>;
    readMapFile(request: ReadMapRequest, metadata?: Metadata): Observable<ReadMapResponse>;
}
export interface HostMapGrpcServiceController {
    readMapList(request: ReadMapListRequest, metadata?: Metadata): Promise<ReadMapListResponse> | Observable<ReadMapListResponse> | ReadMapListResponse;
    readMapFile(request: ReadMapRequest, metadata?: Metadata): Promise<ReadMapResponse> | Observable<ReadMapResponse> | ReadMapResponse;
}
export declare function HostMapGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const HOST_MAP_GRPC_SERVICE_NAME = "HostMapGrpcService";
export interface HostFileGrpcServiceClient {
    readFileList(request: ReadFileListRequest, metadata?: Metadata): Observable<ReadFileListResponse>;
    readFile(request: ReadFileRequest, metadata?: Metadata): Observable<ReadFileResponse>;
    createFile(request: CreateFileRequest, metadata?: Metadata): Observable<CreateFileResponse>;
    updateFile(request: UpdateFileRequest, metadata?: Metadata): Observable<UpdateFileResponse>;
    deleteFile(request: DeleteFileRequest, metadata?: Metadata): Observable<DeleteFileResponse>;
    uploadFile(request: UploadFileRequest, metadata?: Metadata): Observable<UploadFileResponse>;
    downloadFile(request: DownloadFileRequest, metadata?: Metadata): Observable<DownloadFileResponse>;
}
export interface HostFileGrpcServiceController {
    readFileList(request: ReadFileListRequest, metadata?: Metadata): Promise<ReadFileListResponse> | Observable<ReadFileListResponse> | ReadFileListResponse;
    readFile(request: ReadFileRequest, metadata?: Metadata): Promise<ReadFileResponse> | Observable<ReadFileResponse> | ReadFileResponse;
    createFile(request: CreateFileRequest, metadata?: Metadata): Promise<CreateFileResponse> | Observable<CreateFileResponse> | CreateFileResponse;
    updateFile(request: UpdateFileRequest, metadata?: Metadata): Promise<UpdateFileResponse> | Observable<UpdateFileResponse> | UpdateFileResponse;
    deleteFile(request: DeleteFileRequest, metadata?: Metadata): Promise<DeleteFileResponse> | Observable<DeleteFileResponse> | DeleteFileResponse;
    uploadFile(request: UploadFileRequest, metadata?: Metadata): Promise<UploadFileResponse> | Observable<UploadFileResponse> | UploadFileResponse;
    downloadFile(request: DownloadFileRequest, metadata?: Metadata): Promise<DownloadFileResponse> | Observable<DownloadFileResponse> | DownloadFileResponse;
}
export declare function HostFileGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const HOST_FILE_GRPC_SERVICE_NAME = "HostFileGrpcService";
export interface HostUpdateGrpcServiceClient {
    testPing(request: TestPingRequest, metadata?: Metadata): Observable<TestPingResponse>;
    getNewVersion(request: GetNewVersionRequest, metadata?: Metadata): Observable<GetNewVersionResponse>;
    getCurrentVersion(request: GetCurrentVersionRequest, metadata?: Metadata): Observable<GetCurrentVersionResponse>;
    getReleaseBranch(request: GetReleaseBranchRequest, metadata?: Metadata): Observable<GetReleaseBranchResponse>;
    getReleaseVersion(request: GetReleaseVersionRequest, metadata?: Metadata): Observable<GetReleaseVersionResponse>;
    addWebUi(request: AddWebUIRequest, metadata?: Metadata): Observable<AddWebUIResponse>;
    deleteWebUi(request: DeleteWebUIRequest, metadata?: Metadata): Observable<DeleteWebUIResponse>;
    updateProgram(request: UpdateProgramRequest, metadata?: Metadata): Observable<UpdateProgramResponse>;
}
export interface HostUpdateGrpcServiceController {
    testPing(request: TestPingRequest, metadata?: Metadata): Promise<TestPingResponse> | Observable<TestPingResponse> | TestPingResponse;
    getNewVersion(request: GetNewVersionRequest, metadata?: Metadata): Promise<GetNewVersionResponse> | Observable<GetNewVersionResponse> | GetNewVersionResponse;
    getCurrentVersion(request: GetCurrentVersionRequest, metadata?: Metadata): Promise<GetCurrentVersionResponse> | Observable<GetCurrentVersionResponse> | GetCurrentVersionResponse;
    getReleaseBranch(request: GetReleaseBranchRequest, metadata?: Metadata): Promise<GetReleaseBranchResponse> | Observable<GetReleaseBranchResponse> | GetReleaseBranchResponse;
    getReleaseVersion(request: GetReleaseVersionRequest, metadata?: Metadata): Promise<GetReleaseVersionResponse> | Observable<GetReleaseVersionResponse> | GetReleaseVersionResponse;
    addWebUi(request: AddWebUIRequest, metadata?: Metadata): Promise<AddWebUIResponse> | Observable<AddWebUIResponse> | AddWebUIResponse;
    deleteWebUi(request: DeleteWebUIRequest, metadata?: Metadata): Promise<DeleteWebUIResponse> | Observable<DeleteWebUIResponse> | DeleteWebUIResponse;
    updateProgram(request: UpdateProgramRequest, metadata?: Metadata): Promise<UpdateProgramResponse> | Observable<UpdateProgramResponse> | UpdateProgramResponse;
}
export declare function HostUpdateGrpcServiceControllerMethods(): (constructor: Function) => void;
export declare const HOST_UPDATE_GRPC_SERVICE_NAME = "HostUpdateGrpcService";
