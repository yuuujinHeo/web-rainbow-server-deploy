import { ApiProperty } from '@nestjs/swagger';
import { ControlCommand } from './type/control.type';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

enum FootStatus {
  idle = 0,
  init,
  moving,
  emoStop,
  upDone,
  downDone,
}

enum Description {
  COMMAND = '실행할 컨트롤 명령',
  ID = '요청한 명령의 ID값입니다. request시 자동 생성됩니다.',
  RESULT = '요청한 명령에 대한 결과입니다. accept, reject, success, fail 등 명령에 대해 다양한 값이 존재합니다.',
  MESSAGE = 'result값이 reject, fail 인 경우 SLAMNAV에서 보내는 메시지 입니다.',
  ONOFF = 'LED 수동제어기능을 켜고 끌지를 결정합니다. 값이 true일 때 요청하는 color 값을 사용하며, 값이 false인 경우에는 수동제어기능을 끄고 color 값도 무시합니다. 로봇의 상태에 따라 자동으로 LED 색상이 변경됩니다.',
  LED = 'LED 색상을 입력합니다. onoff가 true일 경우에만 사용됩니다.',
  FREQ = '기능에 따라 onoff가 true일 시, 전송 주기를 입력하세요. 단위는 Hz이며 예로 lidarOnOff를 on하고 frequency를 10으로 입력하면 lidar 데이터를 10Hz로 송신합니다.',
  ROBOT_SERIAL = '로봇 시리얼 번호',
  SAFETY_FIELD = '안전 필드 설정. 사전에 설정된 안전필드 ID값을 입력하세요',
  MCU_DIO = 'MCU DIO 제어. 0번 핀부터 7번 핀까지 순서대로 입력하세요. 예로 [0,0,0,0,0,1,1,1] 은 0번 핀부터 7번 핀까지 순서대로 0,0,0,0,0,1,1,1 로 제어합니다.',
  MCU_DIN = 'MCU DIN 제어. 0번 핀부터 7번 핀까지 순서대로 입력하세요. 예로 [0,0,0,0,0,1,1,1] 은 0번 핀부터 7번 핀까지 순서대로 0,0,0,0,0,1,1,1 로 제어합니다.',
}
export class ExAccessoryRequestDto {
  @ApiProperty({
    description: '외부 악세사리 명령',
    example: ControlCommand.footMove,
    required: true,
  })
  command: string;

  @ApiProperty({
    description: 'Foot 명령 파라미터 (Foot 위치 값)',
    example: 100,
    required: false,
  })
  position: number;
}

export class ExAccessoryResponseDto extends ExAccessoryRequestDto {}

export class ExAccessoryRequestExAccessory extends ExAccessoryRequestDto {
  @ApiProperty({
    description: '명령의 id값. 서버에서 자동 생성됩니다.',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  id: string;
}

export class ExAccessoryResponseExAccessory extends ExAccessoryRequestExAccessory {
  @ApiProperty({
    description: Description.RESULT,
    example: 'accept',
    required: true,
  })
  @IsString()
  result: string;

  @ApiProperty({
    description: Description.MESSAGE,
    example: '',
    required: false,
  })
  @IsString()
  @IsOptional()
  message?: string;
}

export class FootStatusDto {
  @ApiProperty({
    description: 'Foot 연결 상태',
    example: true,
  })
  @Type(() => Boolean)
  connection: boolean;

  @ApiProperty({
    description: 'Foot 위치 값',
    example: 100,
  })
  @Type(() => Number)
  position: number;

  @ApiProperty({
    description: 'Foot이 바닥을 지지하고 있는 상태 여부',
    example: false,
  })
  @Type(() => Boolean)
  is_down: boolean;

  @ApiProperty({
    description: 'Foot 상태',
    example: FootStatus.moving,
    enum: FootStatus,
  })
  @Type(() => Number)
  foot_status: FootStatus;
}

export class TemperatureSensorStatusDto {
  @ApiProperty({
    description: '온도센서 연결 상태',
    example: true,
  })
  @Type(() => Boolean)
  connection: boolean;

  @ApiProperty({
    description: '온도센서 측정값',
    example: 25,
  })
  @Type(() => Number)
  temperature_value: number;
}

export class ExAccessoryStatusDto {
  @ApiProperty({
    description: 'Foot 상태',
    type: FootStatusDto,
  })
  foot: FootStatusDto;

  @ApiProperty({
    description: '온도센서 상태',
    type: TemperatureSensorStatusDto,
  })
  temperature_sensor: TemperatureSensorStatusDto;
}
