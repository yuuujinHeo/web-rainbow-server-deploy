import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UrlUtil } from '@app/common/util/url.util';

enum Description {
  BRANCH = '브랜치 이름',
  SOFTWARE = '소프트웨어 종류 (예: rrs, slamnav2)',
  VERSION = 'version 정보',
  HOTFIX = 'hotfix 여부. hotfix가 true인 경우, 자동 업데이트가 요구됩니다.',
  ID = '요청에 대한 ID 값. 서버에서 자동생성되며 응답에 동일한 ID 값 반환 필요.',
  RESULT = '업데이트 결과',
  MESSAGE = '업데이트 메시지',
}

//// 1) New Version 관련 DTO ////
export class GetNewVersionRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: Description.SOFTWARE,
    example: 'slamnav2',
  })
  software: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: Description.BRANCH,
    default: 'main',
  })
  branch?: string;
}
export class GetNewVersionResponseDto extends GetNewVersionRequestDto {
  @IsObject()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.VERSION,
    example: '1.0.0',
  })
  version?: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.HOTFIX,
    example: true,
  })
  hotfix?: boolean;
}

//// 2) Current Version 관련 DTO ////
export class GetCurrentVersionRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: Description.SOFTWARE,
    example: 'slamnav2',
  })
  software: string;
}
export class GetCurrentVersionResponseDto extends GetCurrentVersionRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.VERSION,
    example: '1.0.0',
  })
  version: string;

  @IsString()
  @ApiPropertyOptional({
    description: Description.BRANCH,
    default: 'main',
  })
  branch: string;
}
export class GetCurrentVersionRequestSocketDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.ID,
    example: UrlUtil.generateUUID(),
  })
  id: string;
}
export class GetCurrentVersionResponseSocketDto extends GetCurrentVersionRequestSocketDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.VERSION,
    example: '1.0.0',
  })
  version: string;

  @IsString()
  @ApiPropertyOptional({
    description: Description.BRANCH,
    default: 'main',
  })
  branch: string;
}
