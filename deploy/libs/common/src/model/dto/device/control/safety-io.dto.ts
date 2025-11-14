import { ApiProperty } from '@nestjs/swagger';
import { ControlCommand } from './type/control.type';
import { Expose, Type } from 'class-transformer';
import { McuDio } from '@app/common/grpc/proto/control';
import { Result } from '../config/config.dto';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class SafetyIoRequestDto {
  @ApiProperty({
    description: 'MCU DIO 명령 파라미터 (채널당 8bit 값)',
    example: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    required: false,
  })
  @IsOptional()
  @Expose()
  mcuDio?: number[][];
}

export class SafetyIoRequestSlamnav extends SafetyIoRequestDto {
  @ApiProperty({
    description: '명령 ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  id: string;

  @ApiProperty({
    description: 'MCU DIO 명령',
    example: ControlCommand.getDigitalIO,
    required: true,
  })
  command: string;
}

export class SafetyIoResponseDto extends SafetyIoRequestDto {
  @ApiProperty({
    description: '결과 메시지. result값이 reject, fail일 경우 메시지 내용을 확인하세요.',
    example: '파라미터의 값이 범위를 벗어났습니다.',
    required: false,
  })
  @IsOptional()
  @IsString()
  message?: string;

  @ApiProperty({
    description: 'MCU DIN 명령 파라미터 (채널당 8bit 값)',
    example: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    required: false,
  })
  @IsOptional()
  @Expose()
  mcuDin?: number[][];
}

export class SafetyIoResponseSlamnav extends SafetyIoResponseDto {
  @ApiProperty({
    description: '명령 ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  id: string;
}
