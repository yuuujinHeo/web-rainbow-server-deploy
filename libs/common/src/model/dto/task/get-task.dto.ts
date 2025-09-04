import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

enum Description {
  MAPNAME = '맵 이름',
  TASKNAME = '태스크 이름',
}

export class GetTaskRequestDto {
  @ApiProperty({
    description: Description.MAPNAME,
    example: 'Test',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  mapName: string;

  @ApiProperty({
    description: Description.TASKNAME,
    example: 'moveTest.task',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  taskName: string;
}

export class GetTaskResponseDto extends GetTaskRequestDto {}
