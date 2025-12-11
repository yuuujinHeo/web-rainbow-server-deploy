import { IsNumber, IsOptional, IsString, Length } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { localization_description } from '../description/localization.description';
import { UrlUtil } from '@app/common/util';
import { FrsDescription } from '../../../description';
import { LocalizationCommand } from '../request/localization.dto';

export class LocalizationResponseDto {
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
    description: localization_description.RESULT,
    example: 'accept',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  result: string;

  @ApiProperty({
    description: localization_description.MESSAGE,
    example: '',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  message?: string;

  @ApiProperty({
    description: localization_description.X,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  x: number;

  @ApiProperty({
    description: localization_description.Y,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  y: number;

  @ApiProperty({
    description: localization_description.Z,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  z: number;

  @ApiProperty({
    description: localization_description.RZ,
    example: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Expose()
  rz: number;
}

export class LocalizationResponseSlamnav extends LocalizationResponseDto {
  @ApiProperty({
    description: localization_description.ID,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  id: string;
}


export class LocalizationResponseFrs {
  @ApiProperty({
    description: FrsDescription.ROBOT_SERIAL,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  robotSerial: string;

  data: LocalizationResponseDto;
}
