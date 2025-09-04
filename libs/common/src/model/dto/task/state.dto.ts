import { IsBoolean, IsInt, IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Optional } from '@nestjs/common';

enum Description {
  MAPNAME = '맵 이름',
  TASKNAME = '태스크 이름',
  RUNNING = '태스크 실행 상태',
  TASKID = '태스크 ID',
  RESULT = '결과',
  MESSAGE = '메시지',
}

export class TaskStateResponseDto {
  @IsBoolean()
  @IsOptional()
  connection: boolean;

  @ApiProperty({ description: Description.MAPNAME, example: 'Test' })
  @IsString()
  @Length(1, 50)
  mapName: string;

  @ApiProperty({
    description: Description.TASKNAME,
    example: 'moveTest.task',
  })
  @IsString()
  @Length(1, 50)
  taskName: string;

  @ApiProperty({ description: Description.RUNNING, example: true })
  @IsBoolean()
  running: boolean;

  @ApiProperty({ description: Description.TASKID, example: 1 })
  @IsInt()
  taskId: number;
}

export class TaskStateRequestTaskman {
  @IsString()
  @IsOptional()
  id?: string;
}

export class TaskStateResponseTaskman extends TaskStateResponseDto {
  @IsString()
  @Optional()
  id?: string;

  @ApiProperty({ description: Description.RESULT, example: 'accept' })
  @IsString()
  @Length(1, 50)
  result: string;

  @ApiProperty({ description: Description.MESSAGE, example: '태스크 완료' })
  @IsString()
  @Length(1, 50)
  message: string;
}
