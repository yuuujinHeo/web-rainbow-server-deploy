import { ApiProperty } from '@nestjs/swagger';
import { PaginationRequest } from './pagination.request';
import { IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class SearchRequestDto extends PaginationRequest {
  @IsString()
  @IsOptional()
  @Type(() => String)
  @ApiProperty({
    example: '',
    description: '검색컬럼명. 검색하고자 하는 컬럼명을 입력해주세요. 없다면 모든 컬럼을 기준으로 검색합니다.',
    required: false,
  })
  searchType?: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  @ApiProperty({
    example: '',
    description: '검색어. 검색하고자 하는 텍스트를 입력해주세요.',
    required: false,
  })
  searchText?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @ApiProperty({
    example: '',
    description: '정렬 옵션. 정렬하고자 하는 컬럼명을 입력해주세요.',
    required: false,
  })
  sortOption?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @ApiProperty({
    example: '',
    description: '정렬 방향. ASC 또는 DESC를 입력해주세요.',
    required: false,
  })
  sortDirection?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @ApiProperty({
    example: '2025-01-01 00:00:00',
    description: '검색 시작 날짜 (YYYY-MM-DD HH:MM:SS)',
    required: false,
  })
  dateFrom?: string;

  @IsOptional()
  @IsString()
  @IsOptional()
  @Type(() => String)
  @ApiProperty({
    example: '2025-12-31 23:59:59',
    description: '검색 종료 날짜 (YYYY-MM-DD HH:MM:SS)',
    required: false,
  })
  dateTo?: string;
}
