import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PaginationRequest {
  @IsOptional()
  @ApiProperty({
    example: '1',
    description: '페이지 번호',
    required: false,
  })
  pageNo?: number;

  @IsOptional()
  @ApiProperty({
    example: '10',
    description: '페이지당 항목 수',
    required: false,
  })
  pageSize?: number;

  /*해당 페이지의 처음 항목의 오프셋을 계산하는 함수*/
  getOffset(): number {
    if (this.pageNo === null || this.pageNo === undefined || this.pageNo < 1) {
      this.pageNo = 1;
    }
    if (this.pageSize === null || this.pageSize === undefined || this.pageSize < 1) {
      this.pageSize = 10;
    }
    return (Number(this.pageNo) - 1) * Number(this.pageSize);
  }

  /*한 페이지의 최대 항목 수를 계산하는 함수*/
  getLimit(): number {
    if (this.pageSize === null || this.pageSize === undefined || this.pageSize < 1) {
      this.pageSize = 10;
    }
    return Number(this.pageSize);
  }
}

export function getPaginationOffset(pageNo: number, pageSize: number): number {
  if (pageNo === null || pageNo === undefined || pageNo < 1) {
    pageNo = 1;
  }
  if (pageSize === null || pageSize === undefined || pageSize < 1) {
    pageSize = 10;
  }
  return (Number(pageNo) - 1) * Number(pageSize);
}

/*한 페이지의 최대 항목 수를 계산하는 함수*/
export function getPaginationLimit(pageSize: number): number {
  if (pageSize === null || pageSize === undefined || pageSize < 1) {
    pageSize = 10;
  }
  return Number(pageSize);
}
