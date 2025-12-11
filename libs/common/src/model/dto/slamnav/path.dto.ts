import { mapDescription } from '@app/common/model/dto/file/map/description';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, Length } from 'class-validator';

export class Path {
  @ApiProperty({
    description: 'Path 단위노드의 X값',
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  x: string;

  @ApiProperty({
    description: 'Path 단위노드의 Y값',
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  y: string;

  @ApiProperty({
    description: 'Path 단위노드의 RZ값',
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  rz: string;
}

export class PathDto {
  @ApiProperty({
    description: 'Path 단위노드의 X값',
    example: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    required: false,
  })
  @IsArray()
  @Length(1, 50)
  path: Array<Array<string>>;

  @ApiProperty({
    description: mapDescription.TIME,
    example: '21352345124124',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  time?: string;
}
