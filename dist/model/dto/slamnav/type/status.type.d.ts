export declare class StatusIMUDto {
    imu_rx: string;
    imu_ry: string;
    imu_rz: string;
    acc_x: string;
    acc_y: string;
    acc_z: string;
    gyr_x: string;
    gyr_y: string;
    gyr_z: string;
}
export declare class StatusLidarDto {
    connection: string;
    port: string;
    serialnumber: string;
}
export declare class StatuMotorDto {
    connection: string;
    current: string;
    status: string;
    temp: string;
}
export declare class StatusConditionDto {
    inlier_ratio: string;
    inlier_error: string;
    mapping_ratio: string;
    mapping_error: string;
}
export declare class StatusStateDto {
    charge: string;
    dock: string;
    emo: string;
    localization: string;
    power: string;
}
export declare class StatusPowerDto {
    bat_current: string;
    bat_in: string;
    bat_out: string;
    bat_percent: string;
    charge_current: string;
    contact_voltage: string;
    power: string;
    total_power: string;
}
export declare class StatusSettingDto {
    platform_type: string;
}
export declare class StatusMapDto {
    map_name: string;
    map_status: string;
}
export declare class StatusSlamnav {
    imu: StatusIMUDto;
    lidar: StatusLidarDto[];
    motor: StatuMotorDto[];
    condition: StatusConditionDto;
    robot_state: StatusStateDto;
    power: StatusPowerDto;
    setting: StatusSettingDto;
    map: StatusMapDto;
    time?: string;
}
