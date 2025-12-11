import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { task_description } from './task.description';

export interface TaskTreeNode {
  key?: string;
  icon?: string;
  label: string;
  data?: string;
  children: TaskTreeNode[];
}

export class GetTaskDto {
  @ApiProperty({
    description: task_description.MAPNAME,
    example: 'Test',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  mapName: string;

  @ApiProperty({
    description: task_description.TASKNAME,
    example: 'moveTest.task',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  taskName: string;
}
