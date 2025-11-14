import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';
import { DateUtil } from '@app/common/util';
import { MoveState, ObsState, PathState } from './state.type';
import { GoalState } from './state.type';

enum Description {
  MOVE_AUTO = '자율주행 이동 상태',
  MOVE_DOCK = '도킹 이동 상태',
  MOVE_JOG = '조이스틱 이동 상태',
  MOVE_OBS = '주행 중 장애물 상태',
  MOVE_PATH = '주행 경로요청 상태',
  POSE = '로봇 글로벌좌표. 위치초기화가 good인 상태일때 유의미 합니다.',
  VELOCITY = '로봇 주행 속도',
  GOAL_NODE = '주행 목표지점 정보 및 상태',
  GOAL_NODE_ID = '주행 목표지점 노드 ID',
  GOAL_NODE_NAME = '주행 목표지점 노드 이름',
  GOAL_NODE_STATE = '주행 목표지점 이동 상태',
  GOAL_NODE_XYZ = '주행 목표지점 글로벌 좌표',
  CUR_NODE = '주행 현재지점 정보 및 상태',
  CUR_NODE_ID = '주행 현재지점 노드 ID',
  CUR_NODE_NAME = '주행 현재지점 노드 이름',
  CUR_NODE_XYZ = '주행 현재지점 글로벌 좌표',
  MOVE_STATE = '이동 상태 관련 정보',
  TIME = '메시지 발송 시간. ms 단위',
}

export class MoveStateDto {
  @ApiProperty({
    description: Description.MOVE_AUTO,
    example: MoveState.notReady,
    enum: MoveState,
    required: false,
  })
  @IsString()
  @Length(1, 50)
  auto_move: string;

  @ApiProperty({
    description: Description.MOVE_DOCK,
    example: 'none',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  dock_move: string;

  @ApiProperty({
    description: Description.MOVE_JOG,
    example: 'none',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  jog_move: string;

  @ApiProperty({
    description: Description.MOVE_OBS,
    example: ObsState.none,
    enum: ObsState,
    required: false,
  })
  @IsString()
  @Length(1, 50)
  obs: string;

  @ApiProperty({
    description: Description.MOVE_PATH,
    example: PathState.none,
    enum: PathState,
    required: false,
  })
  @IsString()
  @Length(1, 50)
  path: string;
}

export class PoseStatusDto {
  @ApiProperty({
    description: Description.POSE,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  x: string;

  @ApiProperty({
    description: Description.POSE,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  y: string;

  @ApiProperty({
    description: Description.POSE,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  rz: string;
}

export class VelocityStatusDto {
  @ApiProperty({
    description: Description.VELOCITY,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  vx: string;

  @ApiProperty({
    description: Description.VELOCITY,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  vy: string;

  @ApiProperty({
    description: Description.VELOCITY,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  wz: string;
}

export class GoalNodeDto {
  @ApiProperty({
    description: Description.GOAL_NODE_ID,
    example: 'goal_1',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  id: string;

  @ApiProperty({
    description: Description.GOAL_NODE_NAME,
    example: 'goal_1',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({
    description: Description.GOAL_NODE_STATE,
    example: GoalState.none,
    enum: GoalState,
    required: false,
  })
  @IsString()
  @Length(1, 50)
  state: string;

  @ApiProperty({
    description: Description.GOAL_NODE_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  x: string;

  @ApiProperty({
    description: Description.GOAL_NODE_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  y: string;

  @ApiProperty({
    description: Description.GOAL_NODE_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  rz: string;
}

export class CurNodeDto {
  @ApiProperty({
    description: Description.CUR_NODE_ID,
    example: 'goal_1',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  id: string;

  @ApiProperty({
    description: Description.CUR_NODE_NAME,
    example: 'goal_1',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({
    description: Description.CUR_NODE_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  x: string;

  @ApiProperty({
    description: Description.CUR_NODE_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  y: string;

  @ApiProperty({
    description: Description.CUR_NODE_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  rz: string;
}

export class MoveStatusSlamnav {
  @ApiProperty({
    description: Description.MOVE_STATE,
    required: false,
  })
  move_state: MoveStateDto;

  @ApiProperty({
    description: Description.POSE,
    required: false,
  })
  pose: PoseStatusDto;

  @ApiProperty({
    description: Description.VELOCITY,
    required: false,
  })
  vel: VelocityStatusDto;

  @ApiProperty({
    description: Description.GOAL_NODE,
    required: false,
  })
  goal_node: GoalNodeDto;

  @ApiProperty({
    description: Description.CUR_NODE,
    required: false,
  })
  cur_node: CurNodeDto;

  @ApiProperty({
    description: Description.TIME,
    example: DateUtil.getTimeString(),
    required: false,
  })
  @IsOptional()
  @IsString()
  time?: string;
}
