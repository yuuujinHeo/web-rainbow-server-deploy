import { TaskVariableDto } from './type/task.type';
export declare class TaskVariablesResponseDto {
    variables: TaskVariableDto[];
}
export declare class TaskVariablesRequestTaskman {
    id?: string;
}
export declare class TaskVariablesResponseTaskman extends TaskVariablesResponseDto {
    id?: string;
}
