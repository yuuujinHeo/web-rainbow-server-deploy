import { PaginationRequest, PaginationResponse } from '@app/common/pagination';
import { SearchRequestDto } from '@app/common/pagination/search.request';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Length } from 'class-validator';
import { Type } from 'class-transformer';

enum Description {
  ALARM_CODE = '알람 코드',
  ALARM_DETAIL = '알람 상세',
  OPERATION_NAME = '작업 이름',
  DESCRIPTION = '설명',
  LIST = '알람 리스트',
  ALARM_STATE = '알람 상태. 단발적인 알람의 경우 SET 값을, 알람 발생/해제가 존재하는 경우 START/END 값을 입력해주세요.',
  ALARM_TIME = '알람 발생 시간',
  DATE_FROM = '알람 시작 날짜. 형식은 yyyy-mm-dd hh:mm:ss형식으로 입력해주세요.',
  DATE_TO = '알람 종료 날짜. 형식은 yyyy-mm-dd hh:mm:ss형식으로 입력해주세요.',
}

export class SEMAlarmActive {
  @ApiProperty({
    description: Description.ALARM_CODE,
    example: 2000,
    required: true,
  })
  @Type(() => Number)
  @IsNumber()
  code: number;

  @ApiProperty({
    description: Description.ALARM_STATE,
    example: 'SET',
    required: true,
  })
  @Type(() => String)
  @IsString()
  @Length(1, 50)
  state: string;
}

export class SEMAlarm {
  @ApiProperty({
    description: Description.ALARM_CODE,
    example: 2000,
    required: true,
  })
  @IsNumber()
  @Type(() => Number)
  code: number;

  @ApiProperty({
    description: Description.ALARM_DETAIL,
    example: '',
    required: false,
  })
  @Type(() => String)
  @IsString()
  @IsOptional()
  detail?: string;

  @ApiProperty({
    description: Description.OPERATION_NAME,
    example: 'PROGRAM_START_FAIL',
    required: true,
  })
  @Type(() => String)
  @IsString()
  @Length(1, 50)
  operationName: string;

  @ApiProperty({
    description: Description.DESCRIPTION,
    example: '프로그램 시작을 실패했습니다.',
    required: false,
  })
  @Type(() => String)
  @IsString()
  @IsOptional()
  description?: string;
}
export class SEMAlarmLog extends SEMAlarm {
  @ApiProperty({
    description: Description.ALARM_STATE,
    example: 'SET',
    required: true,
  })
  @Type(() => String)
  @IsString()
  state: string;

  @ApiProperty({
    description: Description.ALARM_TIME,
    example: '2021-01-01 00:00:00',
    required: true,
  })
  @Type(() => String)
  @IsString()
  @IsOptional()
  @Length(1, 50)
  createAt: string;
}

//정의된 알람 리스트 확인
export class SEMAlamrListRequestDto extends PaginationRequest {
  @ApiProperty({
    description: Description.ALARM_CODE,
    example: 2000,
    required: true,
  })
  @IsNumber()
  @Type(() => Number)
  code?: number;
}
export class SEMAlarmListResponseDto extends PaginationResponse<SEMAlarm> {}

//정의된 알람 리스트 삭제
export class DeleteAlarmDefineRequestDto {
  @ApiProperty({
    description: Description.ALARM_CODE,
    example: 2000,
    required: true,
  })
  @Type(() => Number)
  @IsNumber()
  code: number;
}

//활성화된 알람 추가
export class PostSEMAlarmRequestDto {
  @ApiProperty({
    description: Description.ALARM_CODE,
    example: 2000,
    required: true,
  })
  @Type(() => Number)
  @IsNumber()
  code: number;

  @ApiProperty({
    description: Description.ALARM_STATE,
    example: 'START',
    required: true,
  })
  @Type(() => String)
  @IsString()
  @Length(1, 50)
  state: string;
}

//알람 로그 리스트 확인
export class SEMAlarmLogListRequestDto extends PaginationRequest {}

export class SEMAlarmLogResponseDto extends PaginationResponse<SEMAlarmActive> {}

export class SEMAlarmActiveResponseDto {
  @ApiProperty({
    description: Description.LIST,
    example: [
      {
        code: '2000',
        state: 'START',
      },
    ],
    required: true,
  })
  @IsArray()
  list: SEMAlarmActive[];
}

//알람 로그 삭제
export class DeleteSEMAlarmRequestDto {
  @ApiProperty({
    description: Description.ALARM_CODE,
    example: 2000,
    required: false,
  })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  code?: number;

  @ApiProperty({
    description: Description.DATE_FROM,
    example: '2025-01-01 00:00:00',
    required: false,
  })
  @Type(() => String)
  @IsString()
  @IsOptional()
  @Length(1, 50)
  dateFrom?: string;

  @ApiProperty({
    description: Description.DATE_TO,
    example: '2025-12-31 23:59:59',
    required: false,
  })
  @Type(() => String)
  @IsString()
  @IsOptional()
  @Length(1, 50)
  dateTo?: string;
}

//알람 로그 저장
export class SaveSEMAlarmLogRequestDto {
  @ApiProperty({
    description: Description.ALARM_CODE,
    example: 2000,
    required: true,
  })
  @Type(() => Number)
  @IsNumber()
  code: number;

  @ApiProperty({
    description: Description.ALARM_STATE,
    example: 'SET',
    required: true,
  })
  @Type(() => String)
  @IsString()
  @Length(1, 50)
  state: string;
}
export class SaveSEMAlarmLogResponseDto extends SaveSEMAlarmLogRequestDto {}

// 일반 로그 관련 일단 다 비활성화 처리!!!!!
//일반 로그 삭제하기

//일반 로그 읽어오기
export class SEMGeneralLogRequestDto {
  @ApiProperty({
    description: '일반LOG를 읽어올 시작 날짜를 입력해주세요. 날짜의 형식은 yyyy-mm-dd hh:mm:ss형식으로 입력해주세요.',
    example: '2025-01-01 00:00:00',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  dateTo: string;

  @ApiProperty({
    description: '일반LOG를 읽어올 종료 날짜를 입력해주세요. 날짜의 형식은 yyyy-mm-dd hh:mm:ss형식으로 입력해주세요.',
    example: '2025-12-31 23:59:59',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  dateFrom: string;
}
