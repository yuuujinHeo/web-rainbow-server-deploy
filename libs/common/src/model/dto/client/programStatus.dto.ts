import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, Length } from 'class-validator';

class ProgramDto {
  @ApiProperty({
    description: '프로그램 연결 상태',
    example: true,
    required: true,
  })
  @IsBoolean()
  connection: boolean;
}

export class ProgramStatusDto {
  @ApiProperty({
    description: '슬램네비 연결 상태',
    type: ProgramDto,
  })
  slam: ProgramDto;

  @ApiProperty({
    description: '태스크매니저 연결 상태',
    type: ProgramDto,
  })
  taskman: ProgramDto;

  @ApiProperty({
    description: 'FRS 연결 상태',
    type: ProgramDto,
  })
  frs: ProgramDto;

  @ApiProperty({
    description: '외부 악세사리 연결 상태',
    type: ProgramDto,
  })
  exAccessory: ProgramDto;
}
