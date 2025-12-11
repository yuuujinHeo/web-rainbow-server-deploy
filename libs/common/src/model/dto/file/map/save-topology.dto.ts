import { ApiProperty } from '@nestjs/swagger';
import { mapDescription } from './description';
import { IsArray, IsString, Length } from 'class-validator';
import { NodeDto } from './component/topo.dto';

export class SaveTopologyDto {
  @ApiProperty({
    description: mapDescription.MAPNAME,
    example: 'Test',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  mapName: string;

  @ApiProperty({
    description: mapDescription.FILE,
    example: 'cloud.csv',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  fileName: string;

  @ApiProperty({ description: mapDescription.TOPO, required: true })
  @IsArray()
  data: NodeDto[];
}
