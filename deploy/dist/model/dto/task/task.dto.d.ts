export declare class TaskRequestDto {
    command: string;
}
export declare class TaskResponseDto extends TaskRequestDto {
    taskName?: string;
    taskState?: string;
    taskList?: string[];
    taskData?: any;
}
export declare class TaskRequestTaskman extends TaskRequestDto {
    id?: string;
}
export declare class TaskResponseTaskman extends TaskResponseDto {
    id?: string;
    result?: string;
    message?: string;
}
