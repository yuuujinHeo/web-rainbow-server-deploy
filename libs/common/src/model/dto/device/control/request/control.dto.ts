import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export enum ControlCommand {
  dockStart = 'dock',
  undockStart = 'undock',
  randomSeq = 'randomSeq',
  ledControl = 'ledControl',
  lidarOnOff = 'lidarOnOff',
  pathOnOff = 'pathOnOff',
  motorOnOff = 'motorOnOff',
}

export enum LEDColor {
  none = 'none',
  red = 'red',
  blue = 'blue',
  white = 'white',
  green = 'green',
  magenta = 'magenta',
  yellow = 'yellow',
  red_blink = 'red blink',
  blue_blink = 'blue blink',
  white_blink = 'white blink',
  green_blink = 'green blink',
  magenta_blink = 'magenta blink',
  yellow_blink = 'yellow blink',
  unknown = 'unknown',
}
export class ControlRequestDto {
  @ApiProperty({
    description: '실행할 Command를 입력하세요.',
    example: ControlCommand.dockStart,
    enum: ControlCommand,
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  command: string;

  @ApiProperty({
    description:
      'LED 수동제어기능을 켜고 끌지를 결정합니다. 값이 true일 때 요청하는 color 값을 사용하며, 값이 false인 경우에는 수동제어기능을 끄고 color 값도 무시합니다. 로봇의 상태에 따라 자동으로 LED 색상이 변경됩니다.',
    example: true,
    type: 'boolean',
    required: true,
  })
  @IsBoolean()
  @Expose()
  onoff: boolean;

  @ApiProperty({
    description: 'LED 색상을 입력합니다. onoff가 true일 경우에만 사용됩니다.',
    example: LEDColor.red,
    enum: LEDColor,
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  color?: string;

  @ApiProperty({
    description:
      '기능에 따라 onoff가 true일 시, 전송 주기를 입력하세요. 단위는 Hz이며 예로 lidarOnOff를 on하고 frequency를 10으로 입력하면 lidar 데이터를 10Hz로 송신합니다.',
    example: 10,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Expose()
  frequency?: number;
}
