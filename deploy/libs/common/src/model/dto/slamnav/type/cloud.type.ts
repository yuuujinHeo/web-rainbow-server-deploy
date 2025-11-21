import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, Length } from 'class-validator';
import { PoseStatusDto } from './movestatus.type';
import { DateUtil } from '@app/common/util';

enum Description {
  CLOUD_XYZ = '라이다 클라우드의 로봇기준 좌표',
  CLOUD_LIDAR = '현재 라이다 데이터 배열',
  STATUS_POSE = '로봇 글로벌좌표. 위치초기화가 good인 상태일때 유의미',
  TIME = '메시지 발송 시간. ms 단위',
  CLOUD_MAPPING = '맵 생성 중 누적되는 라이다 데이터 배열(누적된 전체 배열이 아님)',
}

export class CloudDto {
  @ApiProperty({
    description: Description.CLOUD_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  x: string;

  @ApiProperty({
    description: Description.CLOUD_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  y: string;

  @ApiProperty({
    description: Description.CLOUD_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  z: string;

  @ApiProperty({
    description: Description.CLOUD_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  intensity?: string;
}

export class LidarCloudDto {
  @ApiProperty({
    description: Description.CLOUD_LIDAR,
    example: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    required: false,
  })
  @IsArray()
  @Length(1, 50)
  data: Array<Array<number>>;

  @ApiProperty({ description: Description.STATUS_POSE, required: true })
  pose: PoseStatusDto;

  @ApiProperty({
    description: Description.TIME,
    example: DateUtil.getTimeString(),
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  time?: string;
}

export class MappingCloudDto {
  @ApiProperty({
    description: Description.CLOUD_MAPPING,
    example: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    required: false,
  })
  @IsArray()
  @Length(1, 50)
  data: Array<Array<number>>;

  @ApiProperty({
    description: Description.TIME,
    example: DateUtil.getTimeString(),
    required: false,
  })
  @IsString()
  @Length(1, 50)
  time: string;
}
