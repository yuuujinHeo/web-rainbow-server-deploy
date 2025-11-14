import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsOptional, Length, IsJSON } from 'class-validator';
import { SettingDto } from './type/setting.type';

enum Description {
  Type = '설정 타입',
  Data = '설정 데이터. 형식은 예시이며 실제 형식과 다를 수 있습니다.',
}

enum Example {
  Type = 'SRV',
}

export class GetSettingRequestDto {
  @ApiProperty({ description: Description.Type, example: Example.Type, required: false })
  @IsString()
  @IsOptional()
  @Expose()
  type: string;
}

export class GetSettingResponseDto {
  @ApiProperty({ description: Description.Type, example: Example.Type, required: false })
  @IsString()
  @IsOptional()
  @Expose()
  type: string;

  @ApiProperty({ description: Description.Data, example: SettingDto, required: false })
  @IsOptional()
  @Expose()
  data?: SettingDto;
}

export class SaveSettingRequestDto {
  @ApiProperty({ description: Description.Type, example: Example.Type })
  @IsString()
  @IsOptional()
  @Expose()
  type: string;

  @ApiProperty({ description: Description.Data, example: SettingDto })
  @Expose()
  data: SettingDto;
}

export class SaveSettingResponseDto extends SaveSettingRequestDto {}
