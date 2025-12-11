import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Length } from 'class-validator';
import {
  GoalStatus,
  MoveStatus,
  ObsStatus,
  PathStatus,
  slamnav_description,
} from './slamnav.description';
import { Type } from 'class-transformer';
import { number } from 'joi';

export class MoveStateDto {
  @ApiProperty({
    description: slamnav_description.STATUS_MOVE_AUTO,
    example: MoveStatus.notReady,
    enum: MoveStatus,
    required: false,
  })
  @IsString()
  @Length(1, 50)
  auto_move: string;

  @ApiProperty({
    description: slamnav_description.STATUS_MOVE_DOCK,
    example: 'none',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  dock_move: string;

  @ApiProperty({
    description: slamnav_description.STATUS_MOVE_JOG,
    example: 'none',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  jog_move: string;

  @ApiProperty({
    description: slamnav_description.STATUS_MOVE_OBS,
    example: ObsStatus.none,
    enum: ObsStatus,
    required: false,
  })
  @IsString()
  @Length(1, 50)
  obs: string;

  @ApiProperty({
    description: slamnav_description.STATUS_MOVE_PATH,
    example: PathStatus.none,
    enum: PathStatus,
    required: false,
  })
  @IsString()
  @Length(1, 50)
  path: string;
}

export class PoseStatusDto {
  @ApiProperty({
    description: slamnav_description.STATUS_POSE,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  x: string;

  @ApiProperty({
    description: slamnav_description.STATUS_POSE,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  y: string;

  @ApiProperty({
    description: slamnav_description.STATUS_POSE,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  rz: string;
}

export class VelocityStatusDto {
  @ApiProperty({
    description: slamnav_description.STATUS_VELOCITY,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  vx: string;

  @ApiProperty({
    description: slamnav_description.STATUS_VELOCITY,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  vy: string;

  @ApiProperty({
    description: slamnav_description.STATUS_VELOCITY,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  wz: string;
}

export class GoalNodeDto {
  @ApiProperty({
    description: slamnav_description.STATUS_GOAL_ID,
    example: 'goal_1',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  id: string;

  @ApiProperty({
    description: slamnav_description.STATUS_GOAL_NAME,
    example: 'goal_1',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({
    description: slamnav_description.STATUS_GOAL_STATE,
    example: GoalStatus.none,
    enum: GoalStatus,
    required: false,
  })
  @IsString()
  @Length(1, 50)
  state: string;

  @ApiProperty({
    description: slamnav_description.STATUS_GOAL_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  x: string;

  @ApiProperty({
    description: slamnav_description.STATUS_GOAL_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  y: string;

  @ApiProperty({
    description: slamnav_description.STATUS_GOAL_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  rz: string;
}

export class CurNodeDto {
  @ApiProperty({
    description: slamnav_description.STATUS_CUR_ID,
    example: 'goal_1',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  id: string;

  @ApiProperty({
    description: slamnav_description.STATUS_CUR_NAME,
    example: 'goal_1',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty({
    description: slamnav_description.STATUS_CUR_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  x: string;

  @ApiProperty({
    description: slamnav_description.STATUS_CUR_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  y: string;

  @ApiProperty({
    description: slamnav_description.STATUS_CUR_XYZ,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  rz: string;
}

export class MoveStatusSlamnav {
  @ApiProperty({
    description: slamnav_description.STATUS_MOVE,
    required: false,
  })
  move_state: MoveStateDto;

  @ApiProperty({
    description: slamnav_description.STATUS_POSE,
    required: false,
  })
  pose: PoseStatusDto;

  @ApiProperty({
    description: slamnav_description.STATUS_VELOCITY,
    required: false,
  })
  vel: VelocityStatusDto;

  @ApiProperty({
    description: slamnav_description.STATUS_GOAL_NODE,
    required: false,
  })
  goal_node: GoalNodeDto;

  @ApiProperty({
    description: slamnav_description.STATUS_CUR_NODE,
    required: false,
  })
  cur_node: CurNodeDto;

  @ApiProperty({
    description: slamnav_description.TIME,
    example: '21352345124124',
    required: false,
  })
  @IsOptional()
  @IsString()
  time?: string;
}
