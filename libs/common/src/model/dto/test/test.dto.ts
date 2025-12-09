import { PaginationRequest } from '@app/common/pagination/pagination.request';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class TestResultDto {
  @ApiProperty({
    example: 1,
    description: '테스트 ID',
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: '테스트 레코드 ID',
  })
  testRecordId: number;

  @ApiProperty({
    example: 'DISPLAY',
    description: '테스트 주제',
  })
  subject: string;

  @ApiProperty({
    example: 'success',
    description: '테스트 결과',
    enum: ['success', 'fail'],
    nullable: true,
    default: null,
  })
  result: string | null;

  @ApiProperty({
    example: '2025-07-16T07:56:52.000Z',
    description: '테스트 수행 시간',
  })
  testAt: Date;
}

export class TestRecordDto {
  @ApiProperty({
    example: 1,
    description: '테스트 레코드 ID',
  })
  id: number;

  @ApiProperty({
    example: [],
    description: '테스트 결과 목록',
    type: TestResultDto,
    isArray: true,
  })
  tests: TestResultDto[];

  @ApiProperty({
    example: 'tester1',
    description: '테스트 수행자',
    nullable: true,
    default: null,
  })
  tester: string;

  @ApiProperty({
    example: '2025-07-16T07:56:52.000Z',
    description: '테스트 레코드 생성 시간',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2025-07-16T07:56:52.000Z',
    description: '테스트 레코드 수정 시간',
  })
  updatedAt: Date;
}

export class GetTestResultBySubjectDto {
  @IsString()
  @ApiProperty({
    example: 'DISPLAY',
    description: '테스트 주제',
  })
  subject: string;
}

export class GetRecentTestResultDto {
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.split(',').map((s) => s.trim());
    }
    return value;
  })
  @ApiProperty({
    example: ['DISPLAY', 'SPEAKER'],
    description: '테스트 주제 배열 (쉼표로 구분된 문자열도 지원)',
    required: false,
    isArray: true,
  })
  subjects?: string[];
}

export class GetTestRecordListDto extends PaginationRequest {
  @IsOptional()
  @IsString()
  @ApiProperty({
    example: '',
    required: false,
    description: '테스트 주제 배열',
    enum: ['SPEAKER', 'DISPLAY'],
  })
  subject?: string[];

  @ApiProperty({
    description: '일반LOG를 읽어올 시작 날짜를 입력해주세요. 날짜의 형식은 yyyy-mm-dd hh:mm:ss형식으로 입력해주세요.',
    example: '2025-01-01 00:00:00',
    required: true,
  })
  dateTo: string;

  @ApiProperty({
    description: '일반LOG를 읽어올 종료 날짜를 입력해주세요. 날짜의 형식은 yyyy-mm-dd hh:mm:ss형식으로 입력해주세요.',
    example: '2025-12-31 23:59:59',
    required: true,
  })
  dateFrom: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: '',
    required: false,
    description: '검색단어',
  })
  searchText?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'id',
    required: false,
    enum: ['id', 'name'],
    description: '정렬옵션. id 또는 name 값을 기준으로 정렬합니다.',
  })
  sortOption?: string;

  @ApiProperty({
    description: '정렬 방향. ASC 또는 DESC를 입력해주세요.',
    example: 'ASC',
    required: false,
    enum: ['ASC', 'DESC'],
  })
  sortDirection?: string;
}

export class InsertTestDataDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'DISPLAY',
    description: '테스트 주제',
  })
  subject: string;

  @IsEnum(['success', 'fail'])
  @IsNotEmpty()
  @ApiProperty({
    example: 'success',
    description: '테스트 결과',
    enum: ['success', 'fail'],
  })
  result: string;
}

export class UpdateTestDataDto extends InsertTestDataDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1234567890',
    description: '테스트 기록 ID',
  })
  testRecordId: string;
}

export class ResponseTestResultDto {
  @IsArray({ each: true })
  @ValidateNested({ each: true })
  @Type(() => TestResultDto)
  @IsOptional()
  @ApiProperty({
    example: [],
    description: '테스트 결과 목록',
    type: TestResultDto,
    isArray: true,
  })
  items: TestResultDto[];
}

export class ResponseTestRecordDto {
  @IsArray({ each: true })
  @ValidateNested({ each: true })
  @Type(() => TestRecordDto)
  @IsOptional()
  @ApiProperty({
    example: [],
    description: '테스트 레코드 목록',
    type: TestRecordDto,
    isArray: true,
  })
  items: TestRecordDto[];
}

export class ResponseTestRecordListDto extends ResponseTestRecordDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 10,
    description: '페이지 크기',
  })
  pageSize?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: '전체 페이지 수',
  })
  totalPage?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 100,
    description: '전체 테스트 결과 수',
  })
  totalCount: number;
}

export class InsertTestRecordDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'tester1',
    description: '테스트 수행자',
    required: false,
    nullable: true,
    default: null,
  })
  tester?: string | null;

  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  @ApiProperty({
    example: ['DISPLAY', 'SPEAKER'],
    description: '테스트 주제 배열',
    isArray: true,
  })
  subjects: string[];
}

export class UpdateTestRecordDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1234567890',
    description: '테스트 기록 ID',
  })
  id: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'tester1',
    description: '테스트 수행자',
    nullable: true,
    required: false,
    default: null,
  })
  tester?: string | null;
}

export class StartTestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'tester1',
    description: '테스트 수행자',
  })
  tester: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1234567890',
    description: '테스트 기록 ID',
  })
  testRecordId: string;
}

export class TestRunningInfoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'tester1',
    description: '테스트 수행자',
  })
  tester: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1234567890',
    description: '테스트 기록 ID',
  })
  testRecordId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'test-session-1234567890',
    description: '테스트 세션 ID',
  })
  testSessionId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: '테스트 종료 시간',
  })
  testEndTimestamp: number;
}

export class CheckTestRunningDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '1234567890',
    description: '테스트 레코드 ID',
    required: false,
    nullable: true,
    default: undefined,
  })
  testRecordId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'tester1',
    description: '테스트 수행자',
    required: false,
    nullable: true,
    default: undefined,
  })
  tester?: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    example: true,
    description: '테스트 진행 여부',
  })
  isRunning: boolean;
}
