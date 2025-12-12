import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, ValidateIf, ValidateNested } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { MoveCommand } from './type/move.type';
import { UrlUtil } from '@app/common/util';
import { SearchRequestDto } from '@app/common/pagination/search.request';
import { PaginationResponse } from '@app/common/pagination';
import { MoveLog } from '@app/common/grpc/proto/move';
import { Enum } from 'protobufjs';

enum Description {
  COMMAND = '이동 명령',
  ID = '요청한 명령의 ID값입니다. request시 자동 생성됩니다.',
  GOALID = 'goal 이동 시, 목표지점의 노드 ID를 입력하세요.',
  METHOD = '주행 방식. 기본값은 pp(point to point)방식입니다.',
  PRESET = '속도 프리셋. 기본값은 0이며 현재 지원하지 않습니다.',
  RESULT = '요청한 명령에 대한 결과입니다. accept, reject, success, fail 등 명령에 대해 다양한 값이 존재합니다.',
  MESSAGE = 'result값이 reject, fail 인 경우 SLAMNAV에서 보내는 메시지 입니다.',
  DIRECTION = '주행 방향. 기본값은 forward 입니다.',
  X = 'target 이동 시, 목표지점의 지도상 x좌표를 입력하세요. 단위는 [m] 입니다.',
  Y = 'target 이동 시, 목표지점의 지도상 y좌표를 입력하세요. 단위는 [m] 입니다.',
  Z = 'target 이동 시, 목표지점의 지도상 z좌표를 입력하세요. 특정 모델만 사용합니다. 기본값 0으로 입력해주세요. 단위는 [m] 입니다.',
  RZ = 'target 이동 시, 목표지점에서 로봇의 z축 방향값을 입력하세요. 단위는 [deg] 입니다.',
  VX = 'jog 이동 시, 로봇의 x방향 속도를 입력하세요. 단위는 [m/s] 입니다.',
  VY = 'jog 이동 시, 로봇의 y방향 속도를 입력하세요. 특정 모델만 사용합니다. 기본값 0으로 입력해주세요. 단위는 [m/s] 입니다.',
  WZ = 'jog 이동 시, 로봇의 z축 회전 속도를 입력하세요. 단위는 [deg/s] 입니다.',
}

export class MoveRequestDto {
  @ApiProperty({
    description: Description.COMMAND,
    example: MoveCommand.moveStop,
    enum: MoveCommand,
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  command: string;

  @ApiProperty({
    description: Description.GOALID,
    example: '',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(0, 50)
  @Expose()
  goalId?: string;

  @ApiProperty({
    description: Description.METHOD,
    example: 'pp',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @Expose()
  method?: string;

  @ApiProperty({
    description: Description.PRESET,
    example: 0,
    required: false,
  })
  @IsOptional()
  @Expose()
  preset?: number;

  @ApiProperty({ description: Description.X, example: 0, required: false })
  @IsOptional()
  @Expose()
  x?: number;

  @ApiProperty({ description: Description.Y, example: 0, required: false })
  @IsOptional()
  @Expose()
  y?: number;

  @ApiProperty({ description: Description.Z, example: 0, required: false })
  @IsOptional()
  @Expose()
  z?: number;

  @ApiProperty({
    description: Description.RZ,
    example: 0,
    required: false,
  })
  @IsOptional()
  @Expose()
  rz?: number;

  @ApiProperty({
    description: Description.VX,
    example: 0,
    required: false,
  })
  @IsOptional()
  @Expose()
  vx?: number;

  @ApiProperty({
    description: Description.VY,
    example: 0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @Expose()
  vy?: number;

  @ApiProperty({
    description: Description.WZ,
    example: 0,
    required: false,
  })
  @IsOptional()
  wz?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'linearXMove 이동거리 [m] | circularMove 이동거리 [deg] | rotateMove 이동거리 [deg]',
    example: 0,
  })
  @Expose()
  target?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'linearXMove 이동속도 [m/s] | circularMove 이동속도 [deg/s] | rotateMove 이동속도 [deg/s]',
    example: 0,
  })
  @Expose()
  speed?: number;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'circularMove 방향 [left, right]',
    enum: ['left', 'right'],
    example: 'left',
  })
  @Expose()
  direction?: string;
}

export class MoveGoalCommandDto {
  @ApiProperty({
    description: Description.GOALID,
    example: 'goal_1',
    required: true,
  })
  @IsString()
  @Length(0, 50)
  @Expose()
  goalId: string;

  @ApiProperty({ description: Description.METHOD, example: 'pp' })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @Expose()
  method?: string;

  @ApiProperty({ description: Description.PRESET, example: 0 })
  @IsOptional()
  @Expose()
  preset?: number;

  @ApiProperty({ description: Description.DIRECTION, example: 'forward' })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @Expose()
  direction?: string;
}

export class MoveTargetCommandDto {
  @ApiProperty({ description: Description.METHOD, example: 'pp' })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @Expose()
  method?: string;

  @ApiProperty({ description: Description.PRESET, example: 0 })
  @IsOptional()
  @Expose()
  preset?: number;

  @ApiProperty({ description: Description.X, example: 0 })
  x: number;

  @ApiProperty({ description: Description.Y, example: 0 })
  y: number;

  @ApiProperty({ description: Description.Z, example: 0 })
  z: number;

  @ApiProperty({ description: Description.RZ, example: 0 })
  rz: number;

  @ApiProperty({ description: Description.DIRECTION, example: 'forward' })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @Expose()
  direction?: string;
}

export class MoveResponseDto extends MoveRequestDto {
  @ApiProperty({
    description: Description.RESULT,
    example: 'accept',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  @Expose()
  result: string;

  @ApiProperty({
    description: Description.MESSAGE,
    example: '',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  @Expose()
  message?: string;
}

export class MoveRequestSlamnav extends MoveRequestDto {
  @ApiProperty({
    description: Description.ID,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Expose()
  id: string;
}

export class MoveResponseSlamnav extends MoveResponseDto {
  @ApiProperty({
    description: Description.ID,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @Type(() => String)
  @IsString()
  @Length(1, 50)
  @Expose()
  id: string;

  goalName?: string;

  @ApiProperty({
    description: Description.RESULT,
    example: 'accept',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  result: string;

  @ApiProperty({
    description: Description.MESSAGE,
    example: '',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  message?: string;
}

export class MoveResponseFrs {
  @ApiProperty({
    description: '로봇의 시리얼번호',
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  robotSerial: string;

  @ApiProperty({ description: '이동 명령 결과', type: MoveResponseDto, required: true })
  data: MoveResponseDto;
}

export class MoveLogRequestDto extends SearchRequestDto {}

export class MoveLogResponseDto extends PaginationResponse<MoveLog> {}

export class MoveLogLastRequestDto {
  @ApiProperty({ description: '조회할 로그 개수', example: 5 })
  @IsOptional()
  num: number;

  @ApiProperty({ description: '조회할 명령', required: false })
  @IsOptional()
  @IsString()
  @IsEnum(MoveCommand)
  @Type(() => String)
  command?: string;
}

export class MoveLogLastResponseDto {
  @ApiProperty({
    description: '조회된 로그 목록',
    example: [
      {
        id: '1',
        command: 'moveGoal',
        goalId: 'N_33221',
        time: '2025-01-01T00:00:00Z',
        result: 'success',
        message: 'moveGoal 명령 성공',
      },
    ],
  })
  @IsArray()
  list: MoveLog[];
}

enum LinearMoveCommand {
  moveXLinear = 'xLinear',
  movecircular = 'circular',
  moveRotate = 'rotate',
  linearStop = 'stop',
}

export class MoveLinearRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Linear Move 명령구분',
    example: LinearMoveCommand.moveXLinear,
    enum: LinearMoveCommand,
  })
  command: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'linearXMove 이동거리 [m] | circularMove 이동거리 [deg] | rotateMove 이동거리 [deg]',
    example: 0,
  })
  @Expose()
  target?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'linearXMove 이동속도 [m/s] | circularMove 이동속도 [deg/s] | rotateMove 이동속도 [deg/s]',
    example: 0,
  })
  @Expose()
  speed?: number;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'circularMove 방향 [left, right]',
    enum: ['left', 'right'],
    example: 'left',
  })
  @Expose()
  direction?: 'left' | 'right';
}
