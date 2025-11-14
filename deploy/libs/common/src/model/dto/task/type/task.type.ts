import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

enum Description {
  MAPNAME = '맵 이름',
  TASKNAME = '태스크 이름',
  VARIABLE_NAME = '변수 이름',
  VARIABLE_TYPE = '변수 타입',
}

export enum TaskCommand {
  taskLoad = 'taskLoad',
  taskRun = 'taskRun',
  taskStop = 'taskStop',
  taskSave = 'taskSave',
  taskDelete = 'taskDelete',
}

export class TaskVariableDto {
  @IsString()
  @ApiProperty({
    description: Description.VARIABLE_NAME,
    example: 'test',
    required: false,
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: Description.VARIABLE_TYPE,
    example: 'string',
    required: false,
  })
  type: string;
}

export interface TaskTreeNode {
  key?: string;
  icon?: string;
  label: string;
  data?: string;
  children: TaskTreeNode[];
}

export class TaskFileDto {
  @ApiProperty({
    description: Description.MAPNAME,
    example: 'Test',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  mapName?: string;

  @ApiProperty({
    description: Description.TASKNAME,
    example: 'moveTest.task',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  taskName?: string;
}
