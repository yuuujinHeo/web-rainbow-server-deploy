import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { TaskVariableDto } from './type/task.type';
import { UrlUtil } from '@app/common/util';
import { Expose } from 'class-transformer';

export class TaskVariablesResponseDto {
  @IsArray()
  @ApiProperty({
    description: '태스크 변수 리스트',
    type: [TaskVariableDto],
  })
  variables: TaskVariableDto[];
}

export class TaskVariablesRequestTaskman {
  @IsString()
  @ApiProperty({
    description: 'ID',
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsOptional()
  @Expose()
  id?: string;
}

export class TaskVariablesResponseTaskman extends TaskVariablesResponseDto {
  @IsString()
  @ApiProperty({
    description: 'ID',
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @IsOptional()
  @Expose()
  id?: string;
}
