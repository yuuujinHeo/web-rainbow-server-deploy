import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

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
