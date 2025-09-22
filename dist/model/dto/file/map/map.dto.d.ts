import { MapDto } from './type/map.type';
import { PaginationRequest } from '@app/common/pagination';
import { NodeDto } from './type/topo.type';
export declare class GetMapListResponseDto {
    list: MapDto[];
}
export declare class FileDto {
    mapName: string;
    fileName: string;
}
export declare class GetCloudRequestDto extends FileDto {
}
export declare class GetCloudResponseDto extends GetCloudRequestDto {
    cloud: Array<Array<string>>;
}
export declare class SaveCloudRequestDto extends FileDto {
    cloud: Array<Array<string>>;
}
export declare class SaveCloudResponseDto extends SaveCloudRequestDto {
}
export declare class SaveCloudPipeRequestDto extends FileDto {
    cloudFile: string;
}
export declare class SaveCloudPipeResponseDto extends FileDto {
    success: boolean;
    filePath: string;
}
export declare class GetTopologyRequestDto extends PaginationRequest {
    mapName: string;
    fileName: string;
    nodeType?: string;
    searchText?: string;
    sortOption?: string;
}
export declare class GetTopologyResponseDto extends FileDto {
    data: NodeDto[];
}
export declare class SaveTopologyRequestDto extends FileDto {
    data: NodeDto[];
}
export declare class SaveTopologyResponseDto extends SaveTopologyRequestDto {
}
export declare class DownloadMapRequestDto {
    fileName: string;
    newMapName: string;
    isForce: boolean;
}
export declare class UploadMapRequestDto {
    mapName: string;
    newMapName: string;
}
