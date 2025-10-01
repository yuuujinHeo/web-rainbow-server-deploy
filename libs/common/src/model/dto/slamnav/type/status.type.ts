import { DateUtil } from '@app/common/util/date.util';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';
import { ChargeState, LocalizationState, MapState } from './state.type';
import { Type } from 'class-transformer';

enum Description {
  IMU = 'IMU, Gyro 센서 데이터',
  IMU_ACC = 'Gyro 속도',
  IMU_GYR = 'IMU 가속도',
  IMU_IMU = 'IMU 속도',
  LIDAR = 'Lidar 연결 상태 및 데이터',
  LIDAR_CONNECTION = 'Lidar 연결 상태',
  LIDAR_PORT = 'Lidar 연결 포트',
  LIDAR_SERIAL_NUMBER = 'Lidar 시리얼 넘버',
  MOTOR = '모터 연결 상태 및 데이터',
  MOTOR_CONNECTION = '모터 연결 상태',
  MOTOR_CURRENT = '모터 전류',
  MOTOR_STATUS = '모터 상태 8가지를 8bit 형태로 쪼개어 각 비트자리수가 0 혹은 1일때에 따라서 상태가 변함. 낮은비트 순서로 (READY, MODE ERROR, JAM ERROR, CURRENT ERROR, BIG ERROR, INPUT ERROR, POSITION ERROR, COLLISTION ERROR)를 나타내며, status 값이 0일때는 Motor Not ready, 1일때는 Motor Ready, 16일때는 Motor Big Error, 20일때는 Motor Big Error + Motor Jam Error 등으로 판단한다.',
  MOTOR_TEMP = '모터 온도',
  CONDITION = '로봇 위치추정 상태',
  CONDITION_INLIER_ERROR = '위치추정 에러율',
  CONDITION_INLIER_RATIO = '위치추정 정확도',
  CONDITION_MAPPING_ERROR = '매핑 에러율',
  CONDITION_MAPPING_RATIO = '매핑 정확도',
  STATE = '로봇 상태 (충전, 도킹, 전원, 초기화)',
  STATE_CHARGE = '충전 상태. 로봇이 SRV 타입인 경우, none, ready(충전 중) 상태만 존재함',
  STATE_DOCK = '도킹 상태',
  STATE_EMO = '비상전원스위치 상태. 스위치가 눌린경우(전원 차단) 값이 true',
  STATE_LOCALIZATION = '위치초기화 상태. 위치초기화가 되지 않은 상태에서는 none, 위치초기화가 성공적으로 되었을 경우 good, 위치초기화에 실패하거나 도중에 위치를 잃어버렸을 경우 fail 값을 가진다',
  STATE_POWER = '전원 상태. 로봇 모터단으로 전원이 인가되는 상태인 경우 true',
  POWER = '로봇 전원 상태',
  POWER_BATTERY_CURRENT = '배터리 전류',
  POWER_BATTERY_IN = '배터리 입력전원',
  POWER_BATTERY_OUT = '배터리 출력전원',
  POWER_BATTERY_PERCENT = '배터리 출력전원(퍼센트)',
  POWER_CHARGE_CURRENT = '충전 전류',
  POWER_CONTACT_VOLTAGE = '충전 전압',
  POWER_POWER = '전력',
  POWER_TOTAL_POWER = '누적 전력',
  SETTING = '로봇의 세팅 값',
  SETTING_PLATFORM_TYPE = '로봇 타입',
  MAP = '로봇 맵 상태',
  MAP_NAME = '로봇 맵 이름',
  MAP_STATUS = '로봇 맵 로딩 상태. 맵이 로딩되지 않은 경우 none, 맵이 로딩중일때(파일이 클 수록 길어짐) loading, 로딩이 완료되었을 떄 loaded 값을 지닌다',
  MOVE = '이동 현 상태',
  MOVE_AUTO = '자율주행 이동 상태',
  MOVE_DOCK = '도킹 이동 상태(미사용)',
  MOVE_JOG = '조이스틱 이동 상태(미사용)',
  MOVE_OBS = '주행 중 장애물 상태',
  MOVE_PATH = '주행 경로요청 상태',
  POSE = '로봇 글로벌좌표. 위치초기화가 good인 상태일때 유의미',
  VELOCITY = '로봇 주행 속도',
  GOAL_NODE = '주행 목표지점 정보 및 상태',
  GOAL_ID = '주행 목표지점 노드 ID',
  GOAL_NAME = '주행 목표지점 노드 이름',
  GOAL_STATE = '주행 목표지점 이동 상태',
  GOAL_XYZ = '주행 목표지점 글로벌 좌표',
  CUR_NODE = '주행 현재지점 정보 및 상태',
  CUR_ID = '주행 현재지점 노드 ID',
  CUR_NAME = '주행 현재지점 노드 이름',
  CUR_STATE = '주행 현재지점 이동 상태',
  CUR_XYZ = '주행 현재지점 글로벌 좌표',
  PATH_XYZ = '주행 중 생성한 경로 포인트의 글로벌좌표',
  TIME = '메시지 발송 시간. ms 단위',
  POWER_TABOS_AE = 'TABOS 전압 오차',
  POWER_TABOS_CURRENT = 'TABOS 전류',
  POWER_TABOS_RC = 'TABOS 전압 오차',
  POWER_TABOS_SOC = 'TABOS 충전 상태',
  POWER_TABOS_SOH = 'TABOS 셀 상태',
  POWER_TABOS_STATUS = 'TABOS 상태',
  POWER_TABOS_TEMP = 'TABOS 온도',
  POWER_TABOS_TTE = 'TABOS 셀 오차',
  POWER_TABOS_TTF = 'TABOS 셀 오차',
  POWER_TABOS_VOLTAGE = 'TABOS 전압',
}

export class StatusIMUDto {
  @ApiProperty({
    description: Description.IMU_IMU,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  imu_rx: number;
  @ApiProperty({
    description: Description.IMU_IMU,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  imu_ry: number;
  @ApiProperty({
    description: Description.IMU_IMU,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  imu_rz: number;

  @ApiProperty({
    description: Description.IMU_ACC,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  acc_x: number;
  @ApiProperty({
    description: Description.IMU_ACC,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  acc_y: number;
  @ApiProperty({
    description: Description.IMU_ACC,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  acc_z: number;

  @ApiProperty({
    description: Description.IMU_GYR,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  gyr_x: number;
  @ApiProperty({
    description: Description.IMU_GYR,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  gyr_y: number;
  @ApiProperty({
    description: Description.IMU_GYR,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  gyr_z: number;
}

export class StatusLidarDto {
  @ApiProperty({
    description: Description.LIDAR_CONNECTION,
    example: false,
    required: false,
  })
  @Type(() => Boolean)
  connection: boolean;

  @ApiProperty({
    description: Description.LIDAR_PORT,
    example: '',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  port: string;

  @ApiProperty({
    description: Description.LIDAR_SERIAL_NUMBER,
    example: '',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  serialnumber: string;
}

export class StatuMotorDto {
  @ApiProperty({
    description: Description.MOTOR_CONNECTION,
    example: false,
    required: false,
  })
  @Type(() => Boolean)
  connection: boolean;

  @ApiProperty({
    description: Description.MOTOR_CURRENT,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  current: number;

  @ApiProperty({
    description: Description.MOTOR_STATUS,
    example: 0,
    required: false,
  })
  @Type(() => Number)
  status: number;

  @ApiProperty({
    description: Description.MOTOR_TEMP,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  temp: number;
}

export class StatusConditionDto {
  @ApiProperty({
    description: Description.CONDITION_INLIER_RATIO,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  inlier_ratio: number;

  @ApiProperty({
    description: Description.CONDITION_INLIER_ERROR,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  inlier_error: number;

  @ApiProperty({
    description: Description.CONDITION_MAPPING_RATIO,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  mapping_ratio: number;

  @ApiProperty({
    description: Description.CONDITION_MAPPING_ERROR,
    example: 0.0,
    required: false,
  })
  @Type(() => Number)
  mapping_error: number;
}

export class StatusStateDto {
  @ApiProperty({
    description: Description.STATE_CHARGE,
    example: 'none',
    enum: ChargeState,
    required: false,
  })
  @IsString()
  charge: string;

  @ApiProperty({
    description: Description.STATE_DOCK,
    example: false,
    required: false,
  })
  @Type(() => Boolean)
  dock: boolean;

  @ApiProperty({
    description: Description.STATE_EMO,
    example: false,
    required: false,
  })
  @Type(() => Boolean)
  emo: boolean;

  @ApiProperty({
    description: Description.STATE_LOCALIZATION,
    example: 'none',
    enum: LocalizationState,
    required: false,
  })
  @IsString()
  localization: string;

  @ApiProperty({
    description: Description.STATE_POWER,
    example: false,
    required: false,
  })
  @Type(() => Boolean)
  power: boolean;
}

export class StatusPowerDto {
  @ApiProperty({
    description: Description.POWER_BATTERY_CURRENT,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  bat_current: number;

  @ApiProperty({
    description: Description.POWER_BATTERY_IN,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  bat_in: number;

  @ApiProperty({
    description: Description.POWER_BATTERY_OUT,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  bat_out: number;

  @ApiProperty({
    description: Description.POWER_BATTERY_PERCENT,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  bat_percent: number;

  @ApiProperty({
    description: Description.POWER_CHARGE_CURRENT,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  charge_current: number;

  @ApiProperty({
    description: Description.POWER_CONTACT_VOLTAGE,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  contact_voltage: number;

  @ApiProperty({
    description: Description.POWER_POWER,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  power: number;

  @ApiProperty({
    description: Description.POWER_TOTAL_POWER,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  total_power: number;

  @ApiProperty({
    description: Description.POWER_TABOS_AE,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  tabos_ae?: number;

  @ApiProperty({
    description: Description.POWER_TABOS_CURRENT,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  tabos_current?: number;

  @ApiProperty({
    description: Description.POWER_TABOS_RC,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  tabos_rc?: number;

  @ApiProperty({
    description: Description.POWER_TABOS_SOC,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  tabos_soc?: number;

  @ApiProperty({
    description: Description.POWER_TABOS_SOH,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  tabos_soh?: number;

  @ApiProperty({
    description: Description.POWER_TABOS_STATUS,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  tabos_status?: number;

  @ApiProperty({
    description: Description.POWER_TABOS_TEMP,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  tabos_temp?: number;

  @ApiProperty({
    description: Description.POWER_TABOS_TTE,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  tabos_tte?: number;

  @ApiProperty({
    description: Description.POWER_TABOS_TTF,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  tabos_ttf?: number;

  @ApiProperty({
    description: Description.POWER_TABOS_VOLTAGE,
    example: 0.0,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  tabos_voltage?: number;
}

export class StatusSettingDto {
  @ApiProperty({
    description: Description.SETTING_PLATFORM_TYPE,
    example: 'SRV',
    required: false,
  })
  @IsString()
  platform_type: string;
}

export class StatusMapDto {
  @ApiProperty({
    description: Description.MAP_NAME,
    example: 'Test',
    required: false,
  })
  @IsString()
  map_name: string;

  @ApiProperty({
    description: Description.MAP_STATUS,
    example: 'none',
    enum: MapState,
    required: false,
  })
  @IsString()
  map_status: string;
}

export class StatusSlamnav {
  @ApiProperty({ description: Description.IMU, required: false })
  imu: StatusIMUDto;

  @ApiProperty({
    description: Description.LIDAR,
    example: [
      {
        connection: 'false',
        port: '/dev/ttyUSB0',
        serialnumber: 'ABC123',
      },
      {
        connection: 'true',
        port: '/dev/ttyUSB1',
        serialnumber: 'DEF456',
      },
    ],
    required: false,
  })
  lidar: StatusLidarDto[];

  @ApiProperty({
    description: Description.MOTOR,
    example: [
      {
        connection: false,
        current: 0.0,
        status: 0,
        temp: 0.0,
      },
      {
        connection: true,
        current: 1.54,
        status: 1,
        temp: 32.0,
      },
    ],
    required: false,
  })
  motor: StatuMotorDto[];

  @ApiProperty({
    description: Description.CONDITION,
    required: false,
  })
  condition: StatusConditionDto;

  @ApiProperty({
    description: Description.STATE,
    required: false,
  })
  robot_state: StatusStateDto;

  @ApiProperty({
    description: Description.POWER,
    required: false,
  })
  power: StatusPowerDto;

  @ApiProperty({
    description: Description.SETTING,
    required: false,
  })
  setting: StatusSettingDto;

  @ApiProperty({ description: Description.MAP, required: false })
  map: StatusMapDto;

  @ApiProperty({
    description: Description.TIME,
    example: DateUtil.getTimeString(),
    required: false,
  })
  @IsOptional()
  time?: string;
}
