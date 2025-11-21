import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsOptional, IsString, Length } from 'class-validator';
import { Type } from 'class-transformer';
import { UrlUtil } from '@app/common/util';

enum Description {
  ID = '노드의 고유 ID값입니다. 자동생성되며 변경할 수 없습니다.',
  NAME = '노드의 이름 값입니다. 기본 자동생성되며 변경 가능합니다. 중복 검사를 하지 않습니다.',
  POSE = '노드의 맵 상 글로벌 좌표값입니다.',
  INFO = '노드의 정보값 나타냅니다. 현재 구현된 기능은 없습니다.',
  LINKS = '노드가 연결된 다른 노드의 id값 배열입니다. 포함된 노드는 현 노드에서 출발하는 단방향 링크로 연결되어 있으며, 해당 노드의 links에 현 노드의 id값이 포함되었다면 양방향 링크로 연결되어 있습니다.',
  TYPE = '노드의 타입을 나타냅니다.',
}

export enum NodeType {
  route = 'ROUTE',
  goal = 'GOAL',
  init = 'INIT',
}

export class LinkDto {
  @ApiProperty({
    description: '노드가 연결되는 다른 노드의 id 값을 나타냅니다. 링크는 단방향입니다',
    example: 'N_56593',
    required: true,
  })
  id: string;

  @ApiProperty({
    description: '링크의 정보값을 나타냅니다. 값이 존재하는 경우에만 필드가 존재합니다',
    example: '',
    required: false,
  })
  @IsOptional()
  info?: string;

  @ApiProperty({
    description: '링크의 속도값을 나타냅니다. 값이 존재하는 경우에만 필드가 존재합니다',
    example: 0,
    required: false,
  })
  speed?: number;

  @ApiProperty({
    description: '링크의 방법을 나타냅니다. 값이 존재하는 경우에만 필드가 존재합니다',
    example: 'DIRECT',
    required: false,
  })
  method?: string;

  @ApiProperty({
    description: '링크의 안전 필드값을 나타냅니다. 값이 존재하는 경우에만 필드가 존재합니다',
    example: 0,
    required: false,
  })
  safetyField?: number;
}

export class PoseDto {
  @ApiProperty({
    description: Description.POSE,
    example: 0,
    required: true,
  })
  x: number;

  @ApiProperty({
    description: Description.POSE,
    example: 0,
    required: true,
  })
  y: number;

  @ApiProperty({
    description: Description.POSE,
    example: 0,
    required: true,
  })
  z: number;

  @ApiProperty({
    description: Description.POSE,
    example: 0,
    required: true,
  })
  rx: number;

  @ApiProperty({
    description: Description.POSE,
    example: 0,
    required: true,
  })
  ry: number;

  @ApiProperty({
    description: Description.POSE,
    example: 0,
    required: true,
  })
  rz: number;
}

export class NodeDto {
  @ApiProperty({
    description: Description.ID,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  id: string;

  @ApiProperty({
    description: Description.NAME,
    example: 'N_15553',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({ description: Description.POSE, required: true })
  @IsObject()
  pose: PoseDto;

  @ApiProperty({
    description: Description.INFO,
    example: '',
    required: true,
  })
  @IsString()
  info: string;

  @ApiProperty({
    description: Description.LINKS,
    example: [
      { id: 'N_56593', info: '' },
      { id: 'N_11448', info: '' },
    ],
    required: true,
  })
  @IsArray()
  links: LinkDto[];

  @ApiProperty({
    description: Description.TYPE,
    example: NodeType.goal,
    enum: NodeType,
    required: true,
  })
  @IsString()
  @Length(1, 50)
  type: string;
}
