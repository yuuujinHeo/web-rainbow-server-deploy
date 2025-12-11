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
import { localization_description } from '../description/localization.description';

export enum LocalizationCommand {
  setInit = 'init',
  semiAutoInit = 'semiautoinit',
  randomInit = 'randominit',
  autoInit = 'autoinit',
  start = 'start',
  stop = 'stop',
}

export class LocalizationRequestDto {
  @ApiProperty({
    description: localization_description.COMMAND,
    example: LocalizationCommand.setInit,
    enum: LocalizationCommand,
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  command: string;

  @ApiProperty({
    description: localization_description.X,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  x?: number;

  @ApiProperty({
    description: localization_description.Y,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  y?: number;

  @ApiProperty({
    description: localization_description.Z,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  z?: number;

  @ApiProperty({
    description: localization_description.RZ,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  rz?: number;
}
