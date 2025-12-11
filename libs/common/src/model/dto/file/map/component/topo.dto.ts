import { ApiProperty } from '@nestjs/swagger';
import { topoDescription } from '../description';
import { IsArray, IsNumber, IsObject, IsString, Length } from 'class-validator';
import { Type } from 'class-transformer';
import { UrlUtil } from '@app/common/util';

export enum NodeType {
  route = 'ROUTE',
  goal = 'GOAL',
  init = 'INIT',
}

export class PoseDto {
  @ApiProperty({
    description: topoDescription.POSE,
    example: 0,
    required: true,
  })
  @Type(() => Number)
  @IsNumber()
  x: number;

  @ApiProperty({
    description: topoDescription.POSE,
    example: 0,
    required: true,
  })
  @Type(() => Number)
  @IsNumber()
  y: number;

  @ApiProperty({
    description: topoDescription.POSE,
    example: 0,
    required: true,
  })
  @Type(() => Number)
  @IsNumber()
  z: number;

  @ApiProperty({
    description: topoDescription.POSE,
    example: 0,
    required: true,
  })
  @Type(() => Number)
  @IsNumber()
  rx: number;

  @ApiProperty({
    description: topoDescription.POSE,
    example: 0,
    required: true,
  })
  @Type(() => Number)
  @IsNumber()
  ry: number;

  @ApiProperty({
    description: topoDescription.POSE,
    example: 0,
    required: true,
  })
  @Type(() => Number)
  @IsNumber()
  rz: number;
}

export class NodeDto {
  @ApiProperty({
    description: topoDescription.ID,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  id: string;

  @ApiProperty({
    description: topoDescription.NAME,
    example: 'N_15553',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({ description: topoDescription.POSE, required: true })
  @IsObject()
  pose: PoseDto;

  @ApiProperty({
    description: topoDescription.INFO,
    example: '',
    required: true,
  })
  @IsString()
  info: string;

  @ApiProperty({
    description: topoDescription.LINKS,
    example: ['N_56593', 'N_11448'],
    required: true,
  })
  @IsArray()
  @IsString({ each: true })
  links: string[];

  @ApiProperty({
    description: topoDescription.TYPE,
    example: NodeType.goal,
    enum: NodeType,
    required: true,
  })
  @IsString()
  @Length(1, 50)
  type: string;
}
