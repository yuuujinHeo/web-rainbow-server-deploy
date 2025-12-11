import { IsArray, IsString } from 'class-validator';

export class TaskVariable {
  @IsString()
  name: string;

  @IsString()
  type: string;
}

export class TaskVariablesDto {
  @IsString()
  id: string;

  @IsArray()
  variables: TaskVariable[];
}
