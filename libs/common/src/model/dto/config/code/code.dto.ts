/**
 * ┌─────────────────────────────────────────────────┐
 * │  Project: web-rainbow-server
 * │  File: code.dto.ts
 * │  Developer: kjlee
 * │  Created: 25. 8. 12.
 * │  Description: 코드 관련 모든 DTO 통합 모듈
 * └─────────────────────────────────────────────────┘
 */

import { IsDateString, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Expose } from 'class-transformer';

// ============================================
// REQUEST DTOs (요청용 DTO)
// ============================================

/**
 * 코드 생성 DTO
 *
 * 새로운 코드를 생성할 때 사용하는 데이터 전송 객체입니다.
 */
export class CreateCodeDto {
  /**
   * 코드 아이디 (Primary Key)
   */
  @ApiProperty({
    description: '코드 아이디',
    example: 'USER_STATUS',
  })
  @IsString({ message: 'codeId는 문자열이어야 합니다.' })
  @IsNotEmpty({ message: 'codeId is required' })
  codeId: string;

  /**
   * 코드 값
   */
  @ApiProperty({
    description: '코드 값',
    example: 'ACTIVE',
  })
  @IsString({ message: 'code는 문자열이어야 합니다.' })
  @IsNotEmpty({ message: 'code is required' })
  code: string;

  /**
   * 코드 명
   */
  @ApiProperty({
    description: '코드 명',
    example: '활성',
  })
  @IsString({ message: 'codeName은 문자열이어야 합니다.' })
  @IsNotEmpty({ message: 'codeName is required' })
  codeName: string;

  /**
   * 코드 설명
   */
  @ApiProperty({
    description: '코드 설명',
    example: '활성 상태를 나타내는 코드',
    required: false,
  })
  @IsString({ message: 'codeDesc는 문자열이어야 합니다.' })
  @IsOptional()
  codeDesc?: string;

  /**
   * 상위 코드
   */
  @ApiProperty({
    description: '상위 코드',
    example: 'STATUS',
    required: false,
  })
  @IsString({ message: 'parentCode는 문자열이어야 합니다.' })
  @IsOptional()
  parentCode?: string;

  /**
   * 정렬 순서
   */
  @ApiProperty({
    description: '정렬 순서',
    example: 1,
    required: false,
  })
  @IsNumber({}, { message: 'sortOrder는 숫자여야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  sortOrder?: number;

  /**
   * 사용 여부
   */
  @ApiProperty({
    description: '사용 여부 (Y: 사용, N: 미사용)',
    example: 'Y',
    default: 'Y',
    enum: ['Y', 'N'],
    required: true,
  })
  @IsString({ message: 'useYn은 문자열이어야 합니다.' })
  @IsIn(['Y', 'N'], {
    message: 'useYn은 Y 또는 N이어야 합니다.',
  })
  @IsOptional()
  useYn: string;

  /**
   * 생성일자 (자동 생성)
   */
  // @ApiProperty({
  //   description: '생성일자 (자동 생성)',
  //   example: '2025-06-20T10:00:00.000Z',
  //   required: false,
  //   readOnly: true,
  // })
  // @IsDateString({}, { message: '생성일자는 유효한 ISO 8601 형식이어야 합니다.' })
  // createdAt: string;

  /**
   * 생성자 아이디
   */
  @ApiProperty({
    description: '생성자 아이디',
    example: 'admin',
    required: false,
  })
  @IsString({ message: 'createdBy는 문자열이어야 합니다.' })
  @IsOptional()
  createdBy?: string;
}

/**
 * 코드 수정 DTO
 *
 * 기존 코드 정보를 수정할 때 사용하는 데이터 전송 객체입니다.
 * 모든 필드가 선택사항이며, 제공된 필드만 업데이트됩니다.
 */
export class UpdateCodeDto {
  /**
   * 코드 값
   */
  @ApiProperty({
    description: '코드 값',
    example: 'INACTIVE',
    required: false,
  })
  @IsString({ message: 'code는 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  code?: string;

  /**
   * 코드 명
   */
  @ApiProperty({
    description: '코드 명',
    example: '비활성',
    required: false,
  })
  @IsString({ message: 'codeName은 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  codeName?: string;

  /**
   * 코드 설명
   */
  @ApiProperty({
    description: '코드 설명',
    example: '비활성 상태를 나타내는 코드',
    required: false,
  })
  @IsString({ message: 'codeDesc는 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  codeDesc?: string;

  /**
   * 상위 코드
   */
  @ApiProperty({
    description: '상위 코드',
    example: 'STATUS',
    required: false,
  })
  @IsString({ message: 'parentCode는 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  parentCode?: string;

  /**
   * 정렬 순서
   */
  @ApiProperty({
    description: '정렬 순서',
    example: 2,
    required: false,
  })
  @IsNumber({}, { message: 'sortOrder는 숫자여야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  sortOrder?: number;

  /**
   * 사용 여부
   */
  @ApiProperty({
    description: '사용 여부 (Y: 사용, N: 미사용)',
    example: 'N',
    enum: ['Y', 'N'],
    required: false,
  })
  @IsString({ message: 'useYn은 문자열이어야 합니다.' })
  @IsIn(['Y', 'N'], {
    message: 'useYn은 Y 또는 N이어야 합니다.',
  })
  @IsOptional()
  useYn?: string;

  /**
   * 수정자
   */
  @ApiProperty({
    description: '수정자',
    example: 'admin',
    required: false,
  })
  @IsString({ message: 'updatedBy는 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  updatedBy?: string;
}

/**
 * 코드 조회 DTO
 *
 * 코드 목록 조회 및 단일 코드 조회를 위한 요청 데이터 전송 객체입니다.
 * 검색 조건과 페이징 정보를 포함합니다.
 */
export class ReadCodeDto {
  /**
   * 코드 아이디
   */
  @ApiProperty({
    description: '코드 아이디',
    required: false,
  })
  @IsString({ message: 'codeId는 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  codeId?: string;

  /**
   * 코드 값
   */
  @ApiProperty({
    description: '코드 값',
    required: false,
  })
  @IsString({ message: 'code는 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  code?: string;

  /**
   * 코드 명
   */
  @ApiProperty({
    description: '코드 명',
    required: false,
  })
  @IsString({ message: 'codeName은 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  codeName?: string;

  /**
   * 코드 설명
   */
  @ApiProperty({
    description: '코드 설명',
    required: false,
  })
  @IsString({ message: 'codeDesc는 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  codeDesc?: string;

  /**
   * 상위 코드
   */
  @ApiProperty({
    description: '상위 코드',
    required: false,
  })
  @IsString({ message: 'parentCode는 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  parentCode?: string;

  /**
   * 정렬 순서
   */
  @ApiProperty({
    description: '정렬 순서',
    required: false,
  })
  @IsNumber({}, { message: 'sortOrder는 숫자여야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  sortOrder?: number;

  /**
   * 사용 여부
   */
  @ApiProperty({
    description: '사용 여부',
    enum: ['Y', 'N'],
    required: false,
  })
  @IsString({ message: 'useYn은 문자열이어야 합니다.' })
  @IsOptional()
  useYn?: string;

  /**
   * 페이지 번호 (1부터 시작)
   */
  @ApiProperty({
    description: '페이지 번호 (1부터 시작)',
    example: 1,
    minimum: 1,
    required: false,
  })
  @IsNumber({}, { message: 'pageNo는 숫자여야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  pageNo?: number;

  /**
   * 페이지 크기
   */
  @ApiProperty({
    description: '페이지 크기',
    example: 10,
    minimum: 1,
    maximum: 100,
    required: false,
  })
  @IsNumber({}, { message: 'pageSize는 숫자여야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  pageSize?: number;

  /**
   * 검색 타입
   */
  @ApiProperty({
    description: '검색 타입',
    enum: ['codeId', 'code', 'codeName', 'codeDesc'],
    required: false,
  })
  @IsString({ message: 'searchType은 문자열이어야 합니다.' })
  @IsIn(['codeId', 'code', 'codeName', 'codeDesc'], {
    message: 'searchType은 codeId, code, codeName, codeDesc 중 하나여야 합니다.',
  })
  @IsOptional()
  searchType?: string;

  /**
   * 검색 텍스트
   */
  @ApiProperty({
    description: '검색 텍스트',
    required: false,
  })
  @IsString({ message: 'searchText는 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  searchText?: string;

  /**
   * 생성일자
   */
  @ApiProperty({
    description: '생성일자',
    required: false,
  })
  @IsDateString({}, { message: 'createdAt은 유효한 ISO 8601 형식이어야 합니다.' })
  @IsOptional()
  createdAt?: string;

  /**
   * 생성일자 시작 범위
   */
  @ApiProperty({
    description: '생성일자 시작 범위',
    required: false,
  })
  @IsDateString({}, { message: 'createdAtStart는 유효한 ISO 8601 형식이어야 합니다.' })
  @IsOptional()
  createdAtStart?: string;

  /**
   * 생성일자 종료 범위
   */
  @ApiProperty({
    description: '생성일자 종료 범위',
    required: false,
  })
  @IsDateString({}, { message: 'createdAtEnd는 유효한 ISO 8601 형식이어야 합니다.' })
  @IsOptional()
  createdAtEnd?: string;

  /**
   * 수정일자
   */
  @ApiProperty({
    description: '수정일자',
    required: false,
  })
  @IsDateString({}, { message: 'updatedAt은 유효한 ISO 8601 형식이어야 합니다.' })
  @IsOptional()
  updatedAt?: string;

  /**
   * 수정일자 시작 범위
   */
  @ApiProperty({
    description: '수정일자 시작 범위',
    required: false,
  })
  @IsDateString({}, { message: 'updatedAtStart는 유효한 ISO 8601 형식이어야 합니다.' })
  @IsOptional()
  updatedAtStart?: string;

  /**
   * 수정일자 종료 범위
   */
  @ApiProperty({
    description: '수정일자 종료 범위',
    required: false,
  })
  @IsDateString({}, { message: 'updatedAtEnd는 유효한 ISO 8601 형식이어야 합니다.' })
  @IsOptional()
  updatedAtEnd?: string;

  /**
   * 생성자
   */
  @ApiProperty({
    description: '생성자',
    required: false,
  })
  @IsString({ message: 'createdBy는 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  createdBy?: string;

  /**
   * 수정자
   */
  @ApiProperty({
    description: '수정자',
    required: false,
  })
  @IsString({ message: 'updatedBy는 문자열이어야 합니다.' })
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  updatedBy?: string;
}

// ============================================
// RESPONSE DTOs (응답용 DTO)
// ============================================

/**
 * 기본 코드 응답 DTO
 */
export class CodeResponseDto {
  @ApiProperty({ description: '코드 아이디', example: 'USER_STATUS', required: false })
  @Expose()
  codeId?: string;

  @ApiProperty({ description: '코드 값', example: 'ACTIVE', required: false })
  @Expose()
  code?: string;

  @ApiProperty({ description: '코드 명', example: '활성', required: false })
  @Expose()
  codeName?: string;

  @ApiProperty({ description: '코드 설명', example: '활성 상태를 나타내는 코드', required: false })
  @Expose()
  codeDesc?: string;

  @ApiProperty({ description: '상위 코드', example: 'STATUS', required: false })
  @Expose()
  parentCode?: string;

  @ApiProperty({ description: '정렬 순서', example: 1, required: false })
  @Expose()
  sortOrder?: number;

  @ApiProperty({ description: '사용 여부', example: 'Y', required: false })
  @Expose()
  useYn?: string;

  @ApiProperty({ description: '생성일시', example: '2025-08-12T15:30:00.000Z', required: false })
  @Expose()
  createdAt?: string;

  @ApiProperty({ description: '수정일시', example: '2025-08-12T15:30:00.000Z', required: false })
  @Expose()
  updatedAt?: string;

  @ApiProperty({ description: '생성자', example: 'admin', required: false })
  @Expose()
  createdBy?: string;

  @ApiProperty({ description: '수정자', example: 'admin', required: false })
  @Expose()
  updatedBy?: string;
}

/**
 * 코드 목록용 데이터 DTO
 */
export class CodeDataDto {
  @ApiProperty({ description: '코드 아이디', example: 'USER_STATUS' })
  @Expose()
  codeId?: string;

  @ApiProperty({ description: '코드 값', example: 'ACTIVE' })
  @Expose()
  code?: string;

  @ApiProperty({ description: '코드 명', example: '활성' })
  @Expose()
  codeName?: string;

  @ApiProperty({ description: '코드 설명', example: '활성 상태를 나타내는 코드' })
  @Expose()
  codeDesc?: string;

  @ApiProperty({ description: '상위 코드', example: 'STATUS' })
  @Expose()
  parentCode?: string;

  @ApiProperty({ description: '정렬 순서', example: 1 })
  @Expose()
  sortOrder?: number;

  @ApiProperty({ description: '사용 여부', example: 'Y' })
  @Expose()
  useYn?: string;

  @ApiProperty({ description: '생성일시', example: '2025-08-12T15:30:00.000Z' })
  @Expose()
  createdAt?: string;

  @ApiProperty({ description: '수정일시', example: '2025-08-12T15:30:00.000Z' })
  @Expose()
  updatedAt?: string;

  @ApiProperty({ description: '생성자', example: 'admin' })
  @Expose()
  createdBy?: string;

  @ApiProperty({ description: '수정자', example: 'admin' })
  @Expose()
  updatedBy?: string;
}

/**
 * 코드 목록 응답 DTO
 */
export class CodeListResponseDto {
  @ApiProperty({ description: '페이지 번호', example: 1 })
  @Expose()
  pageNo: number;

  @ApiProperty({ description: '페이지 크기', example: 10 })
  @Expose()
  pageSize: number;

  @ApiProperty({ description: '전체 개수', example: 25 })
  @Expose()
  totalCount: number;

  @ApiProperty({ description: '전체 페이지 수', example: 3 })
  @Expose()
  totalPage: number;

  @ApiProperty({ description: '검색 타입', example: 'codeName', required: false })
  @Expose()
  searchType?: string;

  @ApiProperty({ description: '검색 텍스트', example: '활성', required: false })
  @Expose()
  searchText?: string;

  @ApiProperty({ description: '검색 시작일', required: false })
  @Expose()
  createdAtStart?: string;

  @ApiProperty({ description: '검색 종료일', required: false })
  @Expose()
  createdAtEnd?: string;

  @ApiProperty({ description: '업데이트 검색 시작일', required: false })
  @Expose()
  updatedAtStart?: string;

  @ApiProperty({ description: '업데이트 검색 종료일', required: false })
  @Expose()
  updatedAtEnd?: string;

  @ApiProperty({ description: '코드 목록', type: [CodeDataDto] })
  @Expose()
  data: CodeDataDto[];
}

/**
 * 코드 생성 응답 DTO
 */
export class CreateCodeResponseDto {
  @ApiProperty({ description: '코드 아이디', example: 'USER_STATUS' })
  @Expose()
  codeId: string;

  @ApiProperty({ description: '코드 값', example: 'ACTIVE' })
  @Expose()
  code: string;

  @ApiProperty({ description: '코드 명', example: '활성' })
  @Expose()
  codeName: string;

  @ApiProperty({ description: '코드 설명', example: '활성 상태를 나타내는 코드' })
  @Expose()
  codeDesc: string;

  @ApiProperty({ description: '상위 코드', example: 'STATUS' })
  @Expose()
  parentCode: string;

  @ApiProperty({ description: '정렬 순서', example: 1 })
  @Expose()
  sortOrder: number;

  @ApiProperty({ description: '사용 여부', example: 'Y' })
  @Expose()
  useYn: string;

  @ApiProperty({ description: '생성일시', example: '2025-08-12T15:30:00.000Z' })
  @Expose()
  createdAt: string;

  @ApiProperty({ description: '생성자', example: 'admin' })
  @Expose()
  createdBy: string;
}

/**
 * 코드 수정 응답 DTO
 */
export class UpdateCodeResponseDto {
  @ApiProperty({ description: '코드 아이디', example: 'USER_STATUS' })
  @Expose()
  codeId: string;

  @ApiProperty({ description: '코드 값', example: 'INACTIVE' })
  @Expose()
  code: string;

  @ApiProperty({ description: '코드 명', example: '비활성' })
  @Expose()
  codeName: string;

  @ApiProperty({ description: '코드 설명', example: '비활성 상태를 나타내는 코드' })
  @Expose()
  codeDesc: string;

  @ApiProperty({ description: '상위 코드', example: 'STATUS' })
  @Expose()
  parentCode: string;

  @ApiProperty({ description: '정렬 순서', example: 2 })
  @Expose()
  sortOrder: number;

  @ApiProperty({ description: '사용 여부', example: 'N' })
  @Expose()
  useYn: string;

  @ApiProperty({ description: '수정일시', example: '2025-08-12T15:30:00.000Z' })
  @Expose()
  updatedAt: string;

  @ApiProperty({ description: '수정자', example: 'admin' })
  @Expose()
  updatedBy: string;
}

/**
 * 코드 삭제 응답 DTO
 */
export class DeleteCodeResponseDto {
  @ApiProperty({ description: '코드 아이디', example: 'USER_STATUS' })
  @Expose()
  codeId: string;

  @ApiProperty({ description: '코드 값', example: 'ACTIVE' })
  @Expose()
  code: string;

  @ApiProperty({ description: '코드 명', example: '활성' })
  @Expose()
  codeName: string;

  @ApiProperty({ description: '코드 설명', example: '활성 상태를 나타내는 코드' })
  @Expose()
  codeDesc: string;

  @ApiProperty({ description: '상위 코드', example: 'STATUS' })
  @Expose()
  parentCode: string;

  @ApiProperty({ description: '정렬 순서', example: 1 })
  @Expose()
  sortOrder: number;

  @ApiProperty({ description: '사용 여부', example: 'Y' })
  @Expose()
  useYn: string;

  @ApiProperty({ description: '생성일시', example: '2025-08-12T15:30:00.000Z' })
  @Expose()
  createdAt: string;

  @ApiProperty({ description: '수정일시', example: '2025-08-12T15:30:00.000Z' })
  @Expose()
  updatedAt: string;

  @ApiProperty({ description: '생성자', example: 'admin' })
  @Expose()
  createdBy: string;

  @ApiProperty({ description: '수정자', example: 'admin' })
  @Expose()
  updatedBy: string;
}
