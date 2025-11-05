import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CobotCommandRequestDto {
  @ApiProperty({
    description: '명령을 보낼 협동로봇이 연결된 TCP 포트번호',
    example: '16000',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  cobotPort: string;

  @ApiProperty({
    description: '협동로봇으로 보낼 string형태의 명령어. 추후 세분화하여 개편 예정. 현재는 command값을 그대로 협동로봇으로 송신',
    example: 'move',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  command: string;
}

export class CobotCommandResponseDto extends CobotCommandRequestDto {}

export class CobotConnectRequestDto {
  @ApiProperty({
    description: '협동로봇 아이디. 아이디는 중복되지 않아야 하며 협동로봇을 구분하는 값으로 사용됩니다.',
    example: 'cobot1',
    required: true,
  })
  @IsString()
  cobotId: string;

  @ApiProperty({
    description: '협동로봇 IP 주소',
    example: '127.0.0.1',
    required: true,
  })
  @IsString()
  ipAddress: string;
}

export class CobotConnectResponseDto extends CobotConnectRequestDto {}

export class CobotConnectServerRequestDto {
  @ApiProperty({
    description: '협동로봇 아이디. 아이디는 중복되지 않아야 하며 협동로봇을 구분하는 값으로 사용됩니다.',
    example: 'cobot1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  cobotId: string;
}

export class CobotConnectServerResponseDto extends CobotConnectServerRequestDto {}

export class GetConnectStateRequestDto {
  @ApiProperty({
    description: '협동로봇 아이디. 아이디는 중복되지 않아야 하며 협동로봇을 구분하는 값으로 사용됩니다.',
    example: 'cobot1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  cobotId: string;
}

export class GetConnectStateResponseDto extends GetConnectStateRequestDto {
  @ApiProperty({
    description: 'Command Server 연결 상태',
    example: true,
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  commandServer: boolean;

  @ApiProperty({
    description: 'Data Server 연결 상태',
    example: true,
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  dataServer: boolean;
}
