import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { task_description } from './task.description';

export class TaskStateDto {
  @IsBoolean()
  @IsOptional()
  connection: boolean;

  @ApiProperty({ description: task_description.MAPNAME, example: 'Test' })
  @IsString()
  @Length(1, 50)
  mapName: string;

  @ApiProperty({
    description: task_description.TASKNAME,
    example: 'moveTest.task',
  })
  @IsString()
  @Length(1, 50)
  taskName: string;

  @ApiProperty({ description: task_description.RUNNING, example: true })
  @IsBoolean()
  running: boolean;

  @ApiProperty({ description: task_description.TASKID, example: 1 })
  @IsInt()
  taskId: number;
}
