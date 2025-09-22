export declare class TaskStateResponseDto {
    connection: boolean;
    mapName: string;
    taskName: string;
    running: boolean;
    taskId: number;
}
export declare class TaskStateRequestTaskman {
    id?: string;
}
export declare class TaskStateResponseTaskman extends TaskStateResponseDto {
    id?: string;
    result: string;
    message: string;
}
