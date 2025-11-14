import { ApiProperty } from '@nestjs/swagger';

export class PaginationResponse<T> {
  /*페이지당 항목 수*/
  @ApiProperty({
    description: '페이지당 항목 수',
    example: 10,
    required: false,
  })
  pageSize?: number;

  /*전체 항목 수*/
  @ApiProperty({
    description: '전체 항목 수',
    example: 100,
    required: false,
  })
  totalCount?: number;

  /*전체 페이지 수*/
  @ApiProperty({
    description: '전체 페이지 수',
    example: 10,
    required: false,
  })
  totalPage?: number;

  /*현재 페이지의 항목*/
  @ApiProperty({
    description: '현재 페이지의 항목',
    example: [],
    required: false,
    type: Array<T>,
  })
  list: T[];

  constructor(list: T[], pageSize?: number, totalCount?: number) {
    this.pageSize = pageSize;
    this.totalCount = totalCount;

    /*전체 페이지 수 계산*/
    this.totalPage = Math.ceil(totalCount / pageSize);

    /*현재 페이지의 항목들 할당*/
    this.list = list;
  }
}
