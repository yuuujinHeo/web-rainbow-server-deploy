import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class MapDto {
  @ApiProperty({ description: '맵 이름', example: 'map_001', required: false })
  @IsString()
  @IsOptional()
  @Expose()
  mapName?: string;

  @ApiProperty({ description: '맵 업데이트 시간', example: '2021-01-01 12:00:00', required: false })
  @IsString()
  @IsOptional()
  @Expose()
  updateDt?: string;

  @ApiProperty({ description: '맵 클라우드 데이터', example: ['cloud.csv'], required: false })
  @IsArray()
  @IsOptional()
  @Expose()
  cloud?: string[];

  @ApiProperty({ description: '맵 토폴로지 데이터', example: ['topology.json', 'topology(copy).json'], required: false })
  @IsArray()
  @IsOptional()
  @Expose()
  topology?: string[];
}
