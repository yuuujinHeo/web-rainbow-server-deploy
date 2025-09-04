import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, Length } from 'class-validator';

export class DeleteConfigRequestDto {
  @IsString()
  @ApiProperty({ description: '설정 키', example: 'config_key' })
  @Length(1, 50)
  key: string;
}

export class DeleteConfigsRequestDto {
  @IsArray()
  @ApiProperty({ description: '설정 목록', example: [{ key: 'config_key' }] })
  configs: DeleteConfigRequestDto[];
}

export class DeleteConfigResponseDto extends DeleteConfigRequestDto {}

export class DeleteConfigsResponseDto extends DeleteConfigsRequestDto {}
