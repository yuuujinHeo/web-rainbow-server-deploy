import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, Length } from 'class-validator';

export class GetConfigRequestDto {
  @IsString()
  @ApiProperty({ description: '설정 키', example: 'config_key', required: false })
  @Length(1, 50)
  key: string;
}

export class GetConfigResponseDto {
  @IsString()
  @ApiProperty({ description: '설정 키', example: 'config_key', required: false })
  @Length(1, 50)
  key: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: '설정 값', example: 'config_value', required: false })
  @Length(1, 50)
  value?: string;
}

export class GetConfigsResponseDto {
  @ApiProperty({ description: '설정 목록', example: [{ key: 'config_key', value: 'config_value' }], required: false })
  configs: GetConfigResponseDto[];
}
