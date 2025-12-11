import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString, IsUUID, Length } from 'class-validator';
import { task_description } from './task.description';
import { TaskCommand } from '../task/type/task.type';
import { UrlUtil } from '@app/common/util';

export class TaskResponseDto {
  @ApiProperty({
    description: task_description.COMMAND,
    example: TaskCommand.taskRun,
    required: true,
  })
  @IsString()
  @Length(1, 50)
  command: string;

  @ApiProperty({
    description: task_description.RESULT,
    example: 'accept',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  result: string;

  @ApiProperty({
    description: task_description.MESSAGE,
    example: '',
    required: false,
  })
  @IsString()
  message?: string;

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

  @ApiProperty({
    description: task_description.RUNNING,
    example: true,
    required: false,
  })
  @IsBoolean()
  running?: boolean;

  @ApiProperty({
    description: task_description.TASKID,
    example: 1,
    required: false,
  })
  @IsInt()
  taskId?: number;
}

export class TaskResponse extends TaskResponseDto {
  @ApiProperty({
    description: task_description.ID,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @IsUUID()
  id: string;
}
