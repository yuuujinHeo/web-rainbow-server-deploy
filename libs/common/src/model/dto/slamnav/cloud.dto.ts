import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, Length } from 'class-validator';
import { PoseStatusDto } from './movestatus.dto';
import { slamnav_description } from './slamnav.description';

export class Cloud {
  @ApiProperty({
    description: slamnav_description.CLOUD_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  x: string;

  @ApiProperty({
    description: slamnav_description.CLOUD_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  y: string;

  @ApiProperty({
    description: slamnav_description.CLOUD_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  z: string;

  @ApiProperty({
    description: slamnav_description.CLOUD_XYZ,
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
    description: slamnav_description.CLOUD_LIDAR,
    example: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    required: false,
  })
  @IsArray()
  @Length(1, 50)
  data: Array<Array<string>>;

  @ApiProperty({ description: slamnav_description.STATUS_POSE, required: true })
  pose: PoseStatusDto;

  @ApiProperty({
    description: slamnav_description.TIME,
    example: '21352345124124',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  time?: string;
}

export class MappingCloudDto {
  @ApiProperty({
    description: slamnav_description.CLOUD_MAPPING,
    example: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    required: false,
  })
  @IsArray()
  @Length(1, 50)
  data: Array<Cloud>;

  @ApiProperty({
    description: slamnav_description.TIME,
    example: '21352345124124',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  time: string;
}
