import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { LEDColor } from './control.dto';

export class LEDRequestDto {
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
    required: true,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @Expose()
  color?: LEDColor;
}
