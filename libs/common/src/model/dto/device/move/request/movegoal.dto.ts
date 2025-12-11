import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  ValidateIf,
} from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { move_description } from '../description/move.description';

export class MoveGoalCommandDto {
  @ApiProperty({
    description: move_description.GOALID,
    example: 'goal_1',
    required: true,
  })
  @IsString()
  @Length(0, 50)
  @Expose()
  goalId: string;

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
}
