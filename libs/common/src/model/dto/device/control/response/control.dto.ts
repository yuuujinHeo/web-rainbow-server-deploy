import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, Length } from 'class-validator';
import { control_description } from '../description/control.description';
import { UrlUtil } from '@app/common/util';
import { ControlCommand } from '../request/control.dto';
import { FrsDescription } from '../../../description';

export class ControlResponseDto {
  @ApiProperty({
    description: control_description.COMMAND,
    example: ControlCommand.dockStart,
    enum: ControlCommand,
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  command: string;

  @ApiProperty({
    description: control_description.RESULT,
    example: 'accept',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  result: string;

  @ApiProperty({
    description: control_description.MESSAGE,
    example: '',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  message?: string;
}

export class ControlResponseSlamnav extends ControlResponseDto {
  @ApiProperty({
    description: control_description.ID,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  id: string;
}

export class ControlResponseFrs {
  @ApiProperty({
    description: FrsDescription.ROBOT_SERIAL,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  robotSerial: string;

  data: ControlResponseDto;
}
