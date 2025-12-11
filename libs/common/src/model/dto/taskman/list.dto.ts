import { ApiProperty } from '@nestjs/swagger';
import { task_description } from './task.description';
import { IsString, Length } from 'class-validator';

export class GetTaskListDto {
  @ApiProperty({
    description: task_description.MAPNAME,
    example: 'Test',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  mapName: string;
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
