import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export const CobotDataRequestCommand = 'request_data';
export enum CobotCommand {
  halt = 'halt',
  taskStop = 'task stop',
  mcJallInit = 'mc jall init',
  programModeReal = 'pgmode real',
  programModeSimulation = 'pgmode simulation',
  programLoadandRun = 'program_load_and_run',
  taskLoad = 'task load',
  taskPlayOnce = 'task play once',
  taskPause = 'task pause',
  taskResumeA = 'task resume_a',
  taskResumeB = 'task resume_b',
}

export class CobotCommandRequestDto {
  @ApiProperty({
    description: '명령을 보낼 협동로봇의 ID',
    example: 'cobot1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  cobotId: string;

  @ApiProperty({
    description: '협동로봇으로 보낼 string형태의 명령어. 추후 세분화하여 개편 예정. 현재는 command값을 그대로 협동로봇으로 송신',
    example: 'halt',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  command: string;
}

export class CobotCommandResponseDto extends CobotCommandRequestDto {}

export class CobotProgramRequestDto {
  @ApiProperty({
    description: '명령을 보낼 협동로봇의 ID',
    example: 'cobot1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  cobotId: string;

  @ApiProperty({
    description: '프로그램 명',
    example: 'program1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  programName: string;
}

export class CobotProgramResponseDto extends CobotProgramRequestDto {}

export class CobotModeRequestDto {
  @ApiProperty({
    description: '모드를 보낼 협동로봇의 ID',
    example: 'cobot1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  cobotId: string;

  @ApiProperty({
    description: '모드',
    example: 'real',
    enum: ['real', 'simulation'],
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  mode: string;
}

export class CobotModeResponseDto extends CobotModeRequestDto {
  @ApiProperty({
    description: '협동로봇으로 보낼 string형태의 명령어. 추후 세분화하여 개편 예정. 현재는 command값을 그대로 협동로봇으로 송신',
    example: 'halt',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  command: string;
}

export class CobotRequestDto {
  @ApiProperty({
    description: '협동로봇 아이디',
    example: 'cobot1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  cobotId: string;
}

export class CobotResponseDto extends CobotRequestDto {}

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
  commandConnected: boolean;

  @ApiProperty({
    description: 'Data Server 연결 상태',
    example: true,
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  dataConnected: boolean;
}

export class GetCobotTcpServerRequestDto {
  @ApiProperty({
    description: 'TCP 서버 포트',
    example: 18000,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  port: number;
}

// export class GetCobotTcpServerResponseDto extends GetCobotTcpServerRequestDto {}

export class TcpServerInfoDto {
  @ApiProperty({
    description: 'TCP 서버 포트',
    example: 18000,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  port: number;

  @ApiProperty({
    description: 'TCP 서버 생성된 시기',
    example: '2025-01-01 12:00:00',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  createAt: string;

  @ApiProperty({
    description: 'TCP 서버 연결된 클라이언트 수',
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  clients: number;
}

export class GetCobotTcpServerResponseDto {
  @ApiProperty({
    description: 'TCP 서버 정보 목록',
    example: [
      {
        port: 18000,
        createAt: '2025-01-01 12:00:00',
        clients: 1,
      },
    ],
    required: true,
  })
  @IsArray()
  @IsNotEmpty()
  servers: TcpServerInfoDto[];
}

export class CreateTcpServerRequestDto {
  @ApiProperty({
    description: 'TCP 서버 포트',
    example: 18000,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  port: number;
}

export class CreateTcpServerResponseDto extends CreateTcpServerRequestDto {
  @ApiProperty({
    description: 'TCP 서버 생성된 시기',
    example: '2025-01-01 12:00:00',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  createAt: string;
}
export class CloseTcpServerRequestDto {
  @ApiProperty({
    description: 'TCP 서버 포트',
    example: 18000,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  port: number;
}

export class CloseTcpServerResponseDto extends CloseTcpServerRequestDto {
  @ApiProperty({
    description: 'TCP 서버 연결된 클라이언트 수',
    example: 0,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  clients: number;
}
