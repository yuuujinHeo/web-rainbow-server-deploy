import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { move_description } from '../description/move.description';

export class MoveTargetCommandDto {
  @ApiProperty({ description: move_description.METHOD, example: 'pp' })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @Expose()
  method?: string;

  @ApiProperty({ description: move_description.PRESET, example: 0 })
  @IsOptional()
  @IsNumber()
  @Expose()
  preset?: number;

  @ApiProperty({ description: move_description.X, example: 0 })
  @IsNumber()
  @Expose()
  x: number;

  @ApiProperty({ description: move_description.Y, example: 0 })
  @IsNumber()
  @Expose()
  y: number;

  @ApiProperty({ description: move_description.Z, example: 0 })
  @IsNumber()
  @Expose()
  z: number;

  @ApiProperty({ description: move_description.RZ, example: 0 })
  @IsNumber()
  @Expose()
  rz: number;
}
