import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';
import {
  ChargeState,
  LocalizationState,
  MapStatus,
  slamnav_description,
} from './slamnav.description';

export class StatusIMUDto {
  @ApiProperty({
    description: slamnav_description.STATUS_IMU_IMU,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  imu_rx: string;
  @ApiProperty({
    description: slamnav_description.STATUS_IMU_IMU,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  imu_ry: string;
  @ApiProperty({
    description: slamnav_description.STATUS_IMU_IMU,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  imu_rz: string;

  @ApiProperty({
    description: slamnav_description.STATUS_IMU_ACC,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  acc_x: string;
  @ApiProperty({
    description: slamnav_description.STATUS_IMU_ACC,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  acc_y: string;
  @ApiProperty({
    description: slamnav_description.STATUS_IMU_ACC,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  acc_z: string;

  @ApiProperty({
    description: slamnav_description.STATUS_IMU_GYR,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  gyr_x: string;
  @ApiProperty({
    description: slamnav_description.STATUS_IMU_GYR,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  gyr_y: string;
  @ApiProperty({
    description: slamnav_description.STATUS_IMU_GYR,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  gyr_z: string;
}

export class StatusLidarDto {
  @ApiProperty({
    description: slamnav_description.STATUS_LIDAR_CONNECTION,
    example: 'false',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  connection: string;

  @ApiProperty({
    description: slamnav_description.STATUS_LIDAR_PORT,
    example: '',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  port: string;

  @ApiProperty({
    description: slamnav_description.STATUS_LIDAR_SERIAL_NUMBER,
    example: '',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  serialnumber: string;
}

export class StatuMotorDto {
  @ApiProperty({
    description: slamnav_description.STATUS_MOTOR_CONNECTION,
    example: 'false',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  connection: string;

  @ApiProperty({
    description: slamnav_description.STATUS_MOTOR_CURRENT,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  current: string;

  @ApiProperty({
    description: slamnav_description.STATUS_MOTOR_STATUS,
    example: '0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  status: string;

  @ApiProperty({
    description: slamnav_description.STATUS_MOTOR_TEMP,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  temp: string;
}

export class StatusConditionDto {
  @ApiProperty({
    description: slamnav_description.STATUS_CONDITION_INLIER_RATIO,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  inlier_ratio: string;

  @ApiProperty({
    description: slamnav_description.STATUS_CONDITION_INLIER_ERROR,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  inlier_error: string;

  @ApiProperty({
    description: slamnav_description.STATUS_CONDITION_MAPPING_RATIO,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  mapping_ratio: string;

  @ApiProperty({
    description: slamnav_description.STATUS_CONDITION_MAPPING_ERROR,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  mapping_error: string;
}

export class StatusStateDto {
  @ApiProperty({
    description: slamnav_description.STATUS_STATE_CHARGE,
    example: 'none',
    enum: ChargeState,
    required: false,
  })
  @IsString()
  @Length(1, 50)
  charge: string;

  @ApiProperty({
    description: slamnav_description.STATUS_STATE_DOCK,
    example: 'false',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  dock: string;

  @ApiProperty({
    description: slamnav_description.STATUS_STATE_EMO,
    example: 'false',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  emo: string;

  @ApiProperty({
    description: slamnav_description.STATUS_STATE_LOCALIZATION,
    example: 'none',
    enum: LocalizationState,
    required: false,
  })
  @IsString()
  @Length(1, 50)
  localization: string;

  @ApiProperty({
    description: slamnav_description.STATUS_STATE_POWER,
    example: 'false',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  power: string;
}

export class StatusPowerDto {
  @ApiProperty({
    description: slamnav_description.STATUS_POWER_BATTERY_CURRENT,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  bat_current: string;

  @ApiProperty({
    description: slamnav_description.STATUS_POWER_BATTERY_IN,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  bat_in: string;

  @ApiProperty({
    description: slamnav_description.STATUS_POWER_BATTERY_OUT,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  bat_out: string;

  @ApiProperty({
    description: slamnav_description.STATUS_POWER_BATTERY_PERCENT,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  bat_percent: string;

  @ApiProperty({
    description: slamnav_description.STATUS_POWER_CHARGE_CURRENT,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  charge_current: string;

  @ApiProperty({
    description: slamnav_description.STATUS_POWER_CONTACT_VOLTAGE,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  contact_voltage: string;

  @ApiProperty({
    description: slamnav_description.STATUS_POWER_POWER,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  power: string;

  @ApiProperty({
    description: slamnav_description.STATUS_POWER_TOTAL_POWER,
    example: '0.0',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  total_power: string;
}

export class StatusSettingDto {
  @ApiProperty({
    description: slamnav_description.STATUS_SETTING_PLATFORM_TYPE,
    example: 'SRV',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  platform_type: string;
}

export class StatusMapDto {
  @ApiProperty({
    description: slamnav_description.STATUS_MAP_NAME,
    example: 'Test',
    required: false,
  })
  @IsString()
  @Length(1, 50)
  map_name: string;

  @ApiProperty({
    description: slamnav_description.STATUS_MAP_STATUS,
    example: 'none',
    enum: MapStatus,
    required: false,
  })
  @IsString()
  @Length(1, 50)
  map_status: string;
}

export class StatusSlamnav {
  @ApiProperty({ description: slamnav_description.STATUS_IMU, required: false })
  imu: StatusIMUDto;

  @ApiProperty({
    description: slamnav_description.STATUS_LIDAR,
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
    description: slamnav_description.STATUS_MOTOR,
    example: [
      {
        connection: 'false',
        current: '0.0',
        status: '0',
        temp: '0.0',
      },
      {
        connection: 'true',
        current: '1.54',
        status: '1',
        temp: '32.0',
      },
    ],
    required: false,
  })
  motor: StatuMotorDto[];

  @ApiProperty({
    description: slamnav_description.STATUS_CONDITION,
    required: false,
  })
  condition: StatusConditionDto;

  @ApiProperty({
    description: slamnav_description.STATUS_STATE,
    required: false,
  })
  robot_state: StatusStateDto;

  @ApiProperty({
    description: slamnav_description.STATUS_POWER,
    required: false,
  })
  power: StatusPowerDto;

  @ApiProperty({
    description: slamnav_description.STATUS_SETTING,
    required: false,
  })
  setting: StatusSettingDto;

  @ApiProperty({ description: slamnav_description.STATUS_MAP, required: false })
  map: StatusMapDto;

  @ApiProperty({
    description: slamnav_description.TIME,
    example: '21352345124124',
    required: false,
  })
  @IsOptional()
  time?: string;
}
