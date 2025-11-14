import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, Length } from 'class-validator';

export class SetConfigRequestDto {
  @IsString()
  @ApiProperty({ description: '설정 키', example: 'config_key' })
  @Length(1, 50)
  key: string;

  @IsString()
  @ApiProperty({ description: '설정 값', example: 'config_value' })
  @Length(1, 50)
  value: string;
}

export class SetConfigsRequestDto {
  @ApiProperty({ description: '설정 목록', example: [{ key: 'config_key', value: 'config_value' }] })
  configs: SetConfigRequestDto[];
}

export class SetConfigResponseDto extends SetConfigRequestDto {}

export class SetConfigsResponseDto extends SetConfigsRequestDto {}
