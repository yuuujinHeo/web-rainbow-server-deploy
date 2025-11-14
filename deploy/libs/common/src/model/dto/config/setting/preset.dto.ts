import { IsArray, IsJSON, IsOptional, IsString, Length, ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { PresetDto } from './type/preset.type';

enum Description {
  Type = '세팅 타입',
  Name = '프리셋 이름',
  Data = '프리셋 세팅 데이터',
  List_Type = '프리셋 목록을 불러올 세팅 타입을 입력하세요',
  List = '세팅 프리셋 리스트. 실제 파일명은 preset_{number}.json 형식입니다.',
}

export class GetPresetRequestDto {
  @IsString()
  @ApiProperty({
    description: Description.Type,
    example: 'SRV',
    required: true,
  })
  @IsOptional()
  @Expose()
  type: string;

  @IsString()
  @ApiProperty({
    description: Description.Name,
    example: 'test',
    required: true,
  })
  @IsOptional()
  @Expose()
  name: string;
}

export class GetPresetResponseDto extends GetPresetRequestDto {
  @IsJSON()
  @Expose()
  @ApiProperty({
    description: Description.Data,
    example: PresetDto,
    required: true,
  })
  data: PresetDto;
}

export class SavePresetRequestDto extends GetPresetRequestDto {
  @IsJSON()
  @Expose()
  @ApiProperty({
    description: Description.Data,
    example: PresetDto,
    required: true,
  })
  data: PresetDto;
}

export class SavePresetResponseDto extends SavePresetRequestDto {}

export class DeletePresetRequestDto extends GetPresetRequestDto {}

export class DeletePresetResponseDto extends DeletePresetRequestDto {}

export class CreatePresetRequestDto extends GetPresetRequestDto {}

export class CreatePresetResponseDto extends CreatePresetRequestDto {}

export class GetPresetListRequestDto {
  @IsString()
  @IsOptional()
  @Expose()
  @ApiProperty({
    description: Description.List_Type,
    example: 'SRV',
    required: true,
  })
  type: string;
}

export class GetPresetListResponseDto extends GetPresetListRequestDto {
  @IsArray()
  @Expose()
  @ApiProperty({
    description: Description.List,
    example: ['1', 'test', 'fast'],
    required: true,
  })
  list: string[];
}
