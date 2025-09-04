import { IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AnnotationDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '어노테이션 QA 스텝',
    example: '0.3',
    required: false,
  })
  @Expose()
  ANNOT_QA_STEP?: string;
}

export class CamDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '카메라 최대 높이',
    example: '1.0',
    required: false,
  })
  @Expose()
  CAM_HEIGHT_MAX?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '카메라 최소 높이',
    example: '0.1',
    required: false,
  })
  @Expose()
  CAM_HEIGHT_MIN?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  @ApiProperty({
    description: '카메라 TF 0',
    example: '0.2292,0.0875,0.2,62.0,0.0,115.0',
    required: false,
  })
  @Expose()
  CAM_TF_0?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  @ApiProperty({
    description: '카메라 TF 1',
    example: '0.2292,-0.0875,0.2,-62.0,0.0,-115.0',
    required: false,
  })
  @Expose()
  CAM_TF_1?: string;
}

export class ControlDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '드라이브 확장 제어 시간',
    example: '1.0',
    required: false,
  })
  @Expose()
  DRIVE_EXTENDED_CONTROL_TIME?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '드라이브 목표 접근 게인',
    example: '1.0',
    required: false,
  })
  @Expose()
  DRIVE_GOAL_APPROACH_GAIN?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '드라이브 목표 거리',
    example: '0.1',
    required: false,
  })
  @Expose()
  DRIVE_GOAL_D?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '드라이브 목표 각도',
    example: '5.0',
    required: false,
  })
  @Expose()
  DRIVE_GOAL_TH?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '드라이브 속도 데드존',
    example: '0.0',
    required: false,
  })
  @Expose()
  DRIVE_V_DEADZONE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '드라이브 각속도 데드존',
    example: '0.0',
    required: false,
  })
  @Expose()
  DRIVE_W_DEADZONE?: string;
}

export class DebugDto {
  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: '시뮬레이션 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_SIM?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: 'IMU 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_IMU?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: 'BLIDAR 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_BLIDAR?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: 'BQR 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_BQR?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: 'BEEP 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_BEEP?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: '카메라 사용 여부',
    example: '1',
    required: false,
  })
  @Expose()
  USE_CAM?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: 'RTSP 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_RTSP?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: 'RRS 사용 여부',
    example: '1',
    required: false,
  })
  @Expose()
  USE_RRS?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: 'FMS 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_FMS?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: 'QTUI 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_QTUI?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: 'ARUCO 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_ARUCO?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: '얼리스톱 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_EARLYSTOP?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: 'LVX 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_LVX?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: '협업 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_COOP?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: '멀티 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  USE_MULTI?: string;
}

export class DefaultDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '라이다 최대 범위',
    example: '40.0',
    required: false,
  })
  @Expose()
  LIDAR_MAX_RANGE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '라이다 최소 범위',
    example: '0.5',
    required: false,
  })
  @Expose()
  LIDAR_MIN_RANGE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  @ApiProperty({
    description: '라이다 TF 뒤쪽',
    example: '0.0, 0.0, 0.0, 0.0, 0.0, 0.0',
    required: false,
  })
  @Expose()
  LIDAR_TF_B?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  @ApiProperty({
    description: '라이다 TF 앞쪽',
    example: '0.17, 0.0, 0.0, 0.0, 0.0, -178.0',
    required: false,
  })
  @Expose()
  LIDAR_TF_F?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로봇 크기 최소 X',
    example: '-0.35',
    required: false,
  })
  @Expose()
  ROBOT_SIZE_MIN_X?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로봇 크기 최대 X',
    example: '0.4',
    required: false,
  })
  @Expose()
  ROBOT_SIZE_MAX_X?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로봇 크기 최소 Y',
    example: '-0.35',
    required: false,
  })
  @Expose()
  ROBOT_SIZE_MIN_Y?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로봇 크기 최대 Y',
    example: '0.35',
    required: false,
  })
  @Expose()
  ROBOT_SIZE_MAX_Y?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로봇 크기 최소 Z',
    example: '0',
    required: false,
  })
  @Expose()
  ROBOT_SIZE_MIN_Z?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로봇 크기 최대 Z',
    example: '0.22',
    required: false,
  })
  @Expose()
  ROBOT_SIZE_MAX_Z?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로봇 휠베이스',
    example: '0.387',
    required: false,
  })
  @Expose()
  ROBOT_WHEEL_BASE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로봇 휠 반지름',
    example: '0.0635',
    required: false,
  })
  @Expose()
  ROBOT_WHEEL_RADIUS?: string;
}

export class FmsDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'FMS 서버 ID',
    example: 'tw',
    required: false,
  })
  @Expose()
  SERVER_ID?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'FMS 서버 IP',
    example: '127.0.0.1',
    required: false,
  })
  @Expose()
  SERVER_IP?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'FMS 서버 비밀번호',
    example: 'rainbow',
    required: false,
  })
  @Expose()
  SERVER_PW?: string;
}

export class LocDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 ARUCO ODO 융합 거리',
    example: '2.0',
    required: false,
  })
  @Expose()
  LOC_ARUCO_ODO_FUSION_DIST?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 ARUCO ODO 융합 비율',
    example: '0.8',
    required: false,
  })
  @Expose()
  LOC_ARUCO_ODO_FUSION_RATIO?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 체크 거리',
    example: '0.3',
    required: false,
  })
  @Expose()
  LOC_CHECK_DIST?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 체크 IE',
    example: '0.2',
    required: false,
  })
  @Expose()
  LOC_CHECK_IE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 체크 IR',
    example: '0.4',
    required: false,
  })
  @Expose()
  LOC_CHECK_IR?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 ICP 비용 임계값',
    example: '0.3',
    required: false,
  })
  @Expose()
  LOC_ICP_COST_THRESHOLD?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 ICP 비용 임계값 0',
    example: '1.0',
    required: false,
  })
  @Expose()
  LOC_ICP_COST_THRESHOLD_0?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 ICP 오류 임계값',
    example: '0.2',
    required: false,
  })
  @Expose()
  LOC_ICP_ERROR_THRESHOLD?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 ICP 최대 특징 수',
    example: '1000',
    required: false,
  })
  @Expose()
  LOC_ICP_MAX_FEATURE_NUM?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 ICP ODO 융합 비율',
    example: '0.5',
    required: false,
  })
  @Expose()
  LOC_ICP_ODO_FUSION_RATIO?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 서펠 수',
    example: '3',
    required: false,
  })
  @Expose()
  LOC_SURFEL_NUM?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '로컬라이제이션 서펠 범위',
    example: '0.15',
    required: false,
  })
  @Expose()
  LOC_SURFEL_RANGE?: string;
}

export class MappingDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'SLAM ICP 비용 임계값',
    example: '0.5',
    required: false,
  })
  @Expose()
  SLAM_ICP_COST_THRESHOLD?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'SLAM ICP 누적 수',
    example: '2',
    required: false,
  })
  @Expose()
  SLAM_ICP_DO_ACCUM_NUM?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'SLAM ICP 지우기 간격',
    example: '10',
    required: false,
  })
  @Expose()
  SLAM_ICP_DO_ERASE_GAP?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'SLAM ICP 오류 임계값',
    example: '0.2',
    required: false,
  })
  @Expose()
  SLAM_ICP_ERROR_THRESHOLD?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'SLAM ICP 최대 특징 수',
    example: '1000',
    required: false,
  })
  @Expose()
  SLAM_ICP_MAX_FEATURE_NUM?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'SLAM ICP 뷰 임계값',
    example: '170',
    required: false,
  })
  @Expose()
  SLAM_ICP_VIEW_THRESHOLD?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'SLAM 키프레임 LC 시도 거리',
    example: '3.0',
    required: false,
  })
  @Expose()
  SLAM_KFRM_LC_TRY_DIST?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'SLAM 키프레임 LC 시도 오버랩',
    example: '0.25',
    required: false,
  })
  @Expose()
  SLAM_KFRM_LC_TRY_OVERLAP?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'SLAM 키프레임 업데이트 수',
    example: '50',
    required: false,
  })
  @Expose()
  SLAM_KFRM_UPDATE_NUM?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'SLAM 복셀 크기',
    example: '0.05',
    required: false,
  })
  @Expose()
  SLAM_VOXEL_SIZE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'SLAM 윈도우 크기',
    example: '100',
    required: false,
  })
  @Expose()
  SLAM_WINDOW_SIZE?: string;
}

export class MotorDto {
  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: '모터 방향',
    example: '1',
    required: false,
  })
  @Expose()
  MOTOR_DIR?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '모터 게인 KD',
    example: '4400',
    required: false,
  })
  @Expose()
  MOTOR_GAIN_KD?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '모터 게인 KI',
    example: '0',
    required: false,
  })
  @Expose()
  MOTOR_GAIN_KI?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '모터 게인 KP',
    example: '100',
    required: false,
  })
  @Expose()
  MOTOR_GAIN_KP?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '모터 기어 비율',
    example: '3.0',
    required: false,
  })
  @Expose()
  MOTOR_GEAR_RATIO?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: '모터 ID 왼쪽',
    example: '1',
    required: false,
  })
  @Expose()
  MOTOR_ID_L?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: '모터 ID 오른쪽',
    example: '0',
    required: false,
  })
  @Expose()
  MOTOR_ID_R?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '모터 속도 제한',
    example: '2.0',
    required: false,
  })
  @Expose()
  MOTOR_LIMIT_V?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '모터 속도 가속도 제한',
    example: '1.0',
    required: false,
  })
  @Expose()
  MOTOR_LIMIT_V_ACC?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '모터 각속도 제한',
    example: '180',
    required: false,
  })
  @Expose()
  MOTOR_LIMIT_W?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '모터 각속도 가속도 제한',
    example: '180',
    required: false,
  })
  @Expose()
  MOTOR_LIMIT_W_ACC?: string;
}

export class ObsDto {
  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: '장애물 회피 사용 여부',
    example: '0',
    required: false,
  })
  @Expose()
  OBS_AVOID?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 데드존',
    example: '0.7',
    required: false,
  })
  @Expose()
  OBS_DEADZONE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 로컬 목표 거리',
    example: '4.0',
    required: false,
  })
  @Expose()
  OBS_LOCAL_GOAL_D?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 맵 그리드 크기',
    example: '0.05',
    required: false,
  })
  @Expose()
  OBS_MAP_GRID_SIZE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 맵 최대 Z',
    example: '1.0',
    required: false,
  })
  @Expose()
  OBS_MAP_MAX_Z?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 맵 최소 속도',
    example: '0.3',
    required: false,
  })
  @Expose()
  OBS_MAP_MIN_V?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 맵 최소 Z',
    example: '-1.0',
    required: false,
  })
  @Expose()
  OBS_MAP_MIN_Z?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 맵 범위',
    example: '5.0',
    required: false,
  })
  @Expose()
  OBS_MAP_RANGE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 경로 마진 X',
    example: '0.05',
    required: false,
  })
  @Expose()
  OBS_PATH_MARGIN_X?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 경로 마진 Y',
    example: '0.0',
    required: false,
  })
  @Expose()
  OBS_PATH_MARGIN_Y?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 예측 시간',
    example: '3.0',
    required: false,
  })
  @Expose()
  OBS_PREDICT_TIME?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 안전 마진 X',
    example: '0.1',
    required: false,
  })
  @Expose()
  OBS_SAFE_MARGIN_X?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '장애물 안전 마진 Y',
    example: '0.1',
    required: false,
  })
  @Expose()
  OBS_SAFE_MARGIN_Y?: string;
}

export class RobotDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '플랫폼 이름',
    example: 'TT',
    required: false,
  })
  @Expose()
  PLATFORM_NAME?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: '플랫폼 타입',
    example: 'SRV',
    required: false,
  })
  @Expose()
  PLATFORM_TYPE?: string;
}

export class LvxDto {
  @IsOptional()
  @IsString()
  @Length(1, 100)
  @ApiProperty({
    description: 'LVX TF',
    example: '-0.2079,0.0,1.34,0.0,0.0,90.0',
    required: false,
  })
  @Expose()
  LVX_TF?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'LVX 프레임 DT',
    example: '0.1',
    required: false,
  })
  @Expose()
  LVX_FRM_DT?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'LVX 최소 범위',
    example: '1.0',
    required: false,
  })
  @Expose()
  LVX_MIN_RANGE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'LVX 최대 범위',
    example: '40.0',
    required: false,
  })
  @Expose()
  LVX_MAX_RANGE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'LVX 최대 특징 수',
    example: '500',
    required: false,
  })
  @Expose()
  LVX_MAX_FEATURE_NUM?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'LVX 서펠 NN 수',
    example: '1',
    required: false,
  })
  @Expose()
  LVX_SURFEL_NN_NUM?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'LVX 서펠 범위',
    example: '1.0',
    required: false,
  })
  @Expose()
  LVX_SURFEL_RANGE?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'LVX 비용 임계값',
    example: '1.0',
    required: false,
  })
  @Expose()
  LVX_COST_THRESHOLD?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    description: 'LVX 인라이너 체크 거리',
    example: '0.3',
    required: false,
  })
  @Expose()
  LVX_INLIER_CHECK_DIST?: string;
}

export class SettingDto {
  @ApiProperty({
    description: '어노테이션 설정',
    type: AnnotationDto,
    required: false,
  })
  @Expose()
  annotation?: AnnotationDto;

  @ApiProperty({
    description: '카메라 설정',
    type: CamDto,
    required: false,
  })
  @Expose()
  cam?: CamDto;

  @ApiProperty({
    description: '제어 설정',
    type: ControlDto,
    required: false,
  })
  @Expose()
  control?: ControlDto;

  @ApiProperty({
    description: '디버그 설정',
    type: DebugDto,
    required: false,
  })
  @Expose()
  debug?: DebugDto;

  @ApiProperty({
    description: '기본 설정',
    type: DefaultDto,
    required: false,
  })
  @Expose()
  default?: DefaultDto;

  @ApiProperty({
    description: 'FMS 설정',
    type: FmsDto,
    required: false,
  })
  @Expose()
  fms?: FmsDto;

  @ApiProperty({
    description: '로컬라이제이션 설정',
    type: LocDto,
    required: false,
  })
  @Expose()
  loc?: LocDto;

  @ApiProperty({
    description: '매핑 설정',
    type: MappingDto,
    required: false,
  })
  @Expose()
  mapping?: MappingDto;

  @ApiProperty({
    description: '모터 설정',
    type: MotorDto,
    required: false,
  })
  @Expose()
  motor?: MotorDto;

  @ApiProperty({
    description: '장애물 설정',
    type: ObsDto,
    required: false,
  })
  @Expose()
  obs?: ObsDto;

  @ApiProperty({
    description: '로봇 설정',
    type: RobotDto,
    required: false,
  })
  @Expose()
  robot?: RobotDto;

  @ApiProperty({
    description: 'LVX 설정',
    type: LvxDto,
    required: false,
  })
  @Expose()
  lvx?: LvxDto;
}
