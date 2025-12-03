import { DateUtil } from '@app/common/util/date.util';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';
import { ChargeState, LocalizationState, MapState } from './state.type';
import { Type } from 'class-transformer';

export class CamStatusDto {
  @ApiProperty({
    description: '카메라 연결 상태',
    example: false,
    required: true,
  })
  @Type(() => Boolean)
  connection: boolean;

  @ApiProperty({
    description: '카메라 RGB 이미지 높이',
    example: 1080,
    required: true,
  })
  @Type(() => Number)
  rgb_h: number;

  @ApiProperty({
    description: '카메라 RGB 이미지 너비',
    example: 1920,
    required: true,
  })
  @Type(() => Number)
  rgb_w: number;

  @ApiProperty({
    description: '카메라 Depth 이미지 높이',
    example: 1080,
    required: true,
  })
  @Type(() => Number)
  depth_h: number;

  @ApiProperty({
    description: '카메라 Depth 이미지 너비',
    example: 1920,
    required: true,
  })
  @Type(() => Number)
  depth_w: number;

  @ApiProperty({
    description: '카메라 포인트 수',
    example: 100000,
    required: true,
  })
  @Type(() => Number)
  pts: number;
}

export class LidarStatusDto {
  @ApiProperty({
    description: '라이다 연결 상태',
    example: false,
    required: true,
  })
  @Type(() => Boolean)
  connection: boolean;

  @ApiProperty({
    description: '라이다 포인트 수',
    example: 100000,
    required: true,
  })
  @IsString()
  @Length(1, 50)
  pts: number;
}

export class CpuStatusDto {
  @ApiProperty({
    description: 'CPU 사용률',
    example: 0.0,
    required: true,
  })
  @Type(() => Number)
  use: number;

  @ApiProperty({
    description: 'CPU 온도',
    example: 0.0,
    required: true,
  })
  @Type(() => Number)
  temp: number;
}

export class SystemStatusSlamnav {
  @ApiProperty({
    description: '카메라 상태',
    examples: [
      {
        connection: false,
        rgb_h: 1080,
        rgb_w: 1920,
        depth_h: 1080,
        depth_w: 1920,
        pts: 100000,
      },
      {
        connection: false,
        rgb_h: 1080,
        rgb_w: 1920,
        depth_h: 1080,
        depth_w: 1920,
        pts: 100000,
      },
    ],
    required: false,
  })
  cam: CamStatusDto;

  @ApiProperty({ description: '라이다 상태', required: false })
  lidar: LidarStatusDto;

  @ApiProperty({ description: 'CPU 상태', required: false })
  cpu: CpuStatusDto;

  @ApiProperty({
    description: '메시지 발송 시간. ms 단위',
    example: DateUtil.getTimeString(),
    required: false,
  })
  @IsOptional()
  time?: string;
}
