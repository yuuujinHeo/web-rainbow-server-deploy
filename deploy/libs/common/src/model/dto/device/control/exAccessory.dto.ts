import { ApiProperty } from '@nestjs/swagger';
import { ControlCommand } from './type/control.type';
import { Type } from 'class-transformer';

enum FootStatus {
  idle = 0,
  init,
  moving,
  emoStop,
  upDone,
  downDone,
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

export class ExAccessoryResponseExAccessory extends ExAccessoryRequestExAccessory {}

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
