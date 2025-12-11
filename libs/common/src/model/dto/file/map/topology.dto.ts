import { ApiProperty } from '@nestjs/swagger';
import { mapDescription } from './description';
import { IsOptional, IsString, Length } from 'class-validator';
import { PaginationRequest } from '@app/common/pagination';

export class GetTopologyDto extends PaginationRequest {
  @ApiProperty({ description: mapDescription.MAPNAME, example: 'Small' })
  @IsString()
  @Length(1, 50)
  mapName: string;

  @ApiProperty({ description: mapDescription.FILE, example: 'topo.json' })
  @IsString()
  @Length(1, 50)
  fileName: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: '',
    required: false,
    description: '노드 타입',
  })
  nodeType?: string;

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
    description: '정렬옵션',
  })
  sortOption?: string;
}
