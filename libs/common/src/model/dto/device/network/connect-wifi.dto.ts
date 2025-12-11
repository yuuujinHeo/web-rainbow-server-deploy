import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class ConnectWifiDto {
  @ApiProperty({
    description: '연결할 WIFI의 SSID',
    example: 'mobile_team_5G',
    required: true,
  })
  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  ssid: string;

  @IsOptional()
  @ApiProperty({
    description: '연결할 WIFI의 비밀번호(필요시)',
    example: 'testPassword',
  })
  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  password?: string;
}
