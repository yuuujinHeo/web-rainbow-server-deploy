import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString, IsUUID, Length } from 'class-validator';
import { task_description } from './task.description';
import { TaskCommand } from '../task/task.dto';

export class TaskRequestDto {
  @ApiProperty({
    description: task_description.COMMAND,
    example: TaskCommand.taskRun,
    required: true,
  })
  @IsString()
  @Length(1, 50)
  command: string;

  @ApiProperty({
    description: task_description.MAPNAME,
    example: 'Test',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  mapName?: string;

  @ApiProperty({
    description: task_description.TASKNAME,
    example: 'moveTest.task',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  taskName?: string;
}
