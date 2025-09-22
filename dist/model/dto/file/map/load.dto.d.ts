export declare enum MapCommand {
    uploadMap = "upload",
    downloadMap = "download",
    publishMap = "publish",
    getMapList = "list",
    getCloud = "getCloud",
    saveCloud = "saveCloud",
    getTopo = "getTopo",
    saveTopo = "saveTopo",
    loadMap = "loadMap",
    loadTopo = "loadTopo",
    mappingStart = "mappingStart",
    mappingStop = "mappingStop",
    mappingSave = "mappingSave",
    mappingReload = "mappingReload"
}
export declare class LoadRequestDto {
    command: string;
    mapName?: string;
}
export declare class LoadResponseDto extends LoadRequestDto {
}
export declare class LoadResponseSlamnav extends LoadResponseDto {
    id: string;
    result: string;
    message?: string;
}
export declare class LoadResponseFrs {
    robotSerial: string;
    data: LoadResponseDto;
}
