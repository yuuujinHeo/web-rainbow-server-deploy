export declare enum TaskCommand {
    taskLoad = "taskLoad",
    taskRun = "taskRun",
    taskStop = "taskStop",
    taskSave = "taskSave",
    taskDelete = "taskDelete"
}
export declare class TaskVariableDto {
    name: string;
    type: string;
}
export interface TaskTreeNode {
    key?: string;
    icon?: string;
    label: string;
    data?: string;
    children: TaskTreeNode[];
}
export declare class TaskFileDto {
    mapName?: string;
    taskName?: string;
}
