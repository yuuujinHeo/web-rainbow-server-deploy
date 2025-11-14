import { UrlUtil } from '@app/common/util/url.util';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsOptional, IsArray, Length } from 'class-validator';
import { TaskCommand } from './type/task.type';

enum Description {
  COMMAND = '태스크 명령. 수행할 태스크 명령을 입력하세요.',
  MAPNAME = '맵 이름. 태스크 작업을 진행할 경우, 해당 태스크 파일이 있는 맵 이름을 입력하세요. 태스크 파일은 맵 폴더에 종속되어 있습니다.',
  TASKNAME = '태스크 이름. 태스크 파일의 이름을 입력하세요.',
  ID = '요청의 ID값. 요청에 대한 응답을 받기 위해 필요합니다. 서버에서 요청을 보낼 때 자동으로 생성됩니다.',
  RESULT = '요청에 대한 결과. 요청에 대한 결과를 반환합니다.',
  MESSAGE = '요청에 대한 메시지. 요청에 대한 메시지를 반환합니다.',
}

export class TaskRequestDto {
  @ApiProperty({
    description: Description.COMMAND,
    example: TaskCommand.taskRun,
    enum: TaskCommand,
    required: true,
  })
  @IsString()
  @Length(1, 50)
  command: string;
}

export class TaskResponseDto extends TaskRequestDto {
  @ApiProperty({ description: '태스크 이름', example: 'task_001', required: false })
  @IsString()
  @IsOptional()
  @Expose()
  taskName?: string;

  @ApiProperty({ description: '태스크 상태', example: 'RUNNING', required: false })
  @IsString()
  @IsOptional()
  @Expose()
  taskState?: string;

  @ApiProperty({
    description: '태스크 목록',
    example: ['task_001', 'task_002'],
    required: false,
  })
  @IsArray()
  @IsOptional()
  @Expose()
  taskList?: string[];

  @ApiProperty({ description: '태스크 데이터', example: {}, required: false })
  @IsOptional()
  @Expose()
  taskData?: any;
}

export class TaskRequestTaskman extends TaskRequestDto {
  @ApiProperty({
    description: Description.ID,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @IsOptional()
  @Expose()
  id?: string;
}
export class TaskResponseTaskman extends TaskResponseDto {
  @ApiProperty({
    description: Description.ID,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @IsOptional()
  @Expose()
  id?: string;

  @ApiProperty({ description: Description.RESULT, example: 'accept', required: false })
  @IsString()
  @IsOptional()
  @Expose()
  result?: string;

  @ApiProperty({ description: Description.MESSAGE, example: '', required: false })
  @IsString()
  @IsOptional()
  @Expose()
  message?: string;
}
