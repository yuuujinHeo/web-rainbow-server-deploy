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

export enum MoveCommand {
  moveGoal = 'goal',
  moveTarget = 'target',
  moveStop = 'stop',
  moveJog = 'jog',
  movePause = 'pause',
  moveResume = 'resume',
}

export class MoveRequestDto {
  @ApiProperty({
    description: move_description.COMMAND,
    example: MoveCommand.moveStop,
    enum: MoveCommand,
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  command: string;

  @ApiProperty({
    description: move_description.GOALID,
    example: '',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(0, 50)
  @Expose()
  goalId?: string;

  @ApiProperty({
    description: move_description.METHOD,
    example: 'pp',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @Expose()
  method?: string;

  @ApiProperty({
    description: move_description.PRESET,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  preset?: number;

  @ApiProperty({ description: move_description.X, example: 0, required: false })
  @IsOptional()
  @IsNumber()
  @Expose()
  x?: number;

  @ApiProperty({ description: move_description.Y, example: 0, required: false })
  @IsOptional()
  @IsNumber()
  @Expose()
  y?: number;

  @ApiProperty({ description: move_description.Z, example: 0, required: false })
  @IsOptional()
  @IsNumber()
  @Expose()
  z?: number;

  @ApiProperty({
    description: move_description.RZ,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  rz?: number;

  @ApiProperty({
    description: move_description.VX,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  vx?: number;

  @ApiProperty({
    description: move_description.VY,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  vy?: number;

  @ApiProperty({
    description: move_description.WZ,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  wz?: number;
}
