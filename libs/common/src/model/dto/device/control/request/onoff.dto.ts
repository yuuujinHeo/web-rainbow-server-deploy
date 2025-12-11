import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class OnOffRequestDto {
  @ApiProperty({
    description:
      'OnOff 명령을 사용할 Command를 입력하세요. 현재 사용가능한 Command는 lidarOnOff, pathOnOff, motorOnOff가 있습니다.',
    example: 'lidarOnOff',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  command: string;

  @ApiProperty({
    description: '기능을 켜고 끌지를 결정합니다.',
    example: true,
    required: true,
  })
  @IsBoolean()
  @Expose()
  onoff: boolean;

  @ApiProperty({
    description:
      '기능에 따라 onoff가 true일 시, 전송 주기를 입력하세요. 단위는 Hz이며 예로 lidarOnOff를 on하고 frequency를 10으로 입력하면 lidar 데이터를 10Hz로 송신합니다.',
    example: 10,
  })
  @IsNumber()
  @IsOptional()
  @Expose()
  frequency?: number;
}
