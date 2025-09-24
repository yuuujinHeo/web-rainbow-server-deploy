import { PaginationRequest, PaginationResponse } from '@app/common/pagination';
import { UrlUtil } from '@app/common/util';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

enum Description {
  SOFTWARE = '소프트웨어 종류 (예: rrs, slamnav2)',
  BRANCH = '브랜치 이름',
  TOKEN = '암호화된 token',
  ID = '요청에 대한 ID 값. 서버에서 자동생성되며 응답에 동일한 ID 값 반환 필요.',
  VERSION = 'version 정보',
  RESULT = '업데이트 결과',
  MESSAGE = '업데이트 메시지',
}

//// 1) 소프트웨어 종류 관련 DTO ////
export class GetSoftwareParamDto {
  @IsString()
  @ApiProperty({
    description: '소프트웨어 종류 (예: rrs, slamnav2)',
    example: 'slamnav2',
  })
  software: string;
}

//// 2) Release Apps Branches 관련 DTO ////
export class CommitDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'commit sha',
    example: 'ae601391564b381ee8d2271e9b4b79a632894016',
  })
  sha: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'commit url',
    example: 'https://github.com/rainbow-mobile/rainbow-release-apps/commit/ae601391564b381ee8d2271e9b4b79a632894016',
  })
  url: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'commit name',
  })
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'commit protected',
  })
  protected: boolean;
}
export class GetReleaseAppsBranchesRequestDto extends PaginationRequest {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.TOKEN,
    default: '3bJyXEJA/FvAYWnbAIsj6T96+217WeqR4HpdmuNTGcG/dzYaOLjjWkz3bjR1NGYQqj8nMS8A6N91bnaCTveF0Q==',
  })
  token: string;
}
export class ResponseReleaseAppsBranches {
  @IsObject()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'commit',
    type: CommitDto,
  })
  commit: CommitDto;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.BRANCH,
  })
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.BRANCH,
  })
  protected: boolean;
}
export class GetReleaseAppBranchesResponseDto extends PaginationResponse<ResponseReleaseAppsBranches> {}

export class GetReleaseAppsVersionListRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.TOKEN,
    default: '3bJyXEJA/FvAYWnbAIsj6T96+217WeqR4HpdmuNTGcG/dzYaOLjjWkz3bjR1NGYQqj8nMS8A6N91bnaCTveF0Q==',
  })
  token: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: Description.BRANCH,
    example: 'main',
  })
  branch?: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.SOFTWARE,
    example: 'slamnav2',
  })
  software: string;
}
export class ResponseReleaseVersionInfoDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.BRANCH,
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'version path',
  })
  path: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'version sha',
  })
  sha: string;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'version size',
  })
  size: number;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'version url',
  })
  url: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'version download url',
  })
  download_url: string;

  @IsObject()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'version links',
  })
  _links: {
    self: string;
    html: string;
    git: string;
  };
}

//// 3) Update 관련 DTO ////
export class UpdateRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.SOFTWARE,
    example: 'slamnav2',
  })
  software: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.BRANCH,
    example: 'main',
  })
  branch: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.VERSION,
    example: '1.0.0',
  })
  version: string;
}

export class UpdateRequestSocketDto extends UpdateRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.ID,
    example: UrlUtil.generateUUID(),
  })
  id: string;
}

export class UpdateResponseSocketDto extends UpdateRequestSocketDto {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: Description.RESULT,
    example: 'true',
  })
  result: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: Description.MESSAGE,
    example: '업데이트 완료',
  })
  message?: string;
}

//// 5) WebUI 관련 DTO ////
export class WebUIAppAddDto {
  @ApiProperty({
    description: '앱 이름 배열',
    example: ['app1', 'app2'],
  })
  @IsArray()
  @IsNotEmpty()
  appNames: string[];

  @ApiProperty({
    description: '브랜치 이름',
    example: 'main',
  })
  @IsString()
  @IsOptional()
  branch?: string;

  @ApiProperty({
    description: '로봇 UI에 노출할 첫페이지 URL',
    example: '/S100',
  })
  @IsString()
  @IsOptional()
  fo?: string;
}

export class WebUIAppDeleteDto {
  @ApiProperty({
    description: '앱 이름 배열',
    example: ['app1', 'app2'],
  })
  @IsArray()
  @IsNotEmpty()
  appNames: string[];
}

export class ResponseWebUIAppAddDto {
  @ApiProperty({
    description: '추가한 앱 이름 배열',
    example: ['app1', 'app2'],
  })
  @IsArray()
  @IsNotEmpty()
  appNames: string[];

  @ApiProperty({
    description: '브랜치 이름',
    example: 'main',
  })
  @IsString()
  @IsNotEmpty()
  branch: string;

  @ApiProperty({
    description: '로봇 UI에 노출할 첫페이지 URL',
    example: '/S100',
  })
  @IsString()
  @IsNotEmpty()
  fo: string;
}

export class ResponseWebUIAppDeleteDto {
  @ApiProperty({
    description: '삭제한 앱 이름 배열',
    example: ['app1', 'app2'],
  })
  @IsArray()
  @IsNotEmpty()
  appNames: string[];
}
