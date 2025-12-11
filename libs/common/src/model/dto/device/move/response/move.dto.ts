import { IsNumber, IsOptional, IsString, Length } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { move_description } from '../description/move.description';
import { MoveCommand } from '../request/move.dto';
import { UrlUtil } from '@app/common/util';
import { FrsDescription } from '../../../description';

export class MoveResponseDto {
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
    description: move_description.RESULT,
    example: 'accept',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  result: string;

  @ApiProperty({
    description: move_description.MESSAGE,
    example: '',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  message?: string;

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
export class MoveResponseSlamnav extends MoveResponseDto {
  @ApiProperty({
    description: move_description.ID,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  id: string;
}

export class MoveResponseFrs {
  @ApiProperty({
    description: FrsDescription.ROBOT_SERIAL,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  robotSerial: string;

  @ApiProperty({ description: FrsDescription.ROBOT_SERIAL, required: true })
  data: MoveResponseDto;
}
