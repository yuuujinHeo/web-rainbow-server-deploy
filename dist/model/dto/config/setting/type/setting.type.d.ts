export declare class AnnotationDto {
    ANNOT_QA_STEP?: string;
}
export declare class CamDto {
    CAM_HEIGHT_MAX?: string;
    CAM_HEIGHT_MIN?: string;
    CAM_TF_0?: string;
    CAM_TF_1?: string;
}
export declare class ControlDto {
    DRIVE_EXTENDED_CONTROL_TIME?: string;
    DRIVE_GOAL_APPROACH_GAIN?: string;
    DRIVE_GOAL_D?: string;
    DRIVE_GOAL_TH?: string;
    DRIVE_V_DEADZONE?: string;
    DRIVE_W_DEADZONE?: string;
}
export declare class DebugDto {
    USE_SIM?: string;
    USE_IMU?: string;
    USE_BLIDAR?: string;
    USE_BQR?: string;
    USE_BEEP?: string;
    USE_CAM?: string;
    USE_RTSP?: string;
    USE_RRS?: string;
    USE_FMS?: string;
    USE_QTUI?: string;
    USE_ARUCO?: string;
    USE_EARLYSTOP?: string;
    USE_LVX?: string;
    USE_COOP?: string;
    USE_MULTI?: string;
}
export declare class DefaultDto {
    LIDAR_MAX_RANGE?: string;
    LIDAR_MIN_RANGE?: string;
    LIDAR_TF_B?: string;
    LIDAR_TF_F?: string;
    ROBOT_SIZE_MIN_X?: string;
    ROBOT_SIZE_MAX_X?: string;
    ROBOT_SIZE_MIN_Y?: string;
    ROBOT_SIZE_MAX_Y?: string;
    ROBOT_SIZE_MIN_Z?: string;
    ROBOT_SIZE_MAX_Z?: string;
    ROBOT_WHEEL_BASE?: string;
    ROBOT_WHEEL_RADIUS?: string;
}
export declare class FmsDto {
    SERVER_ID?: string;
    SERVER_IP?: string;
    SERVER_PW?: string;
}
export declare class LocDto {
    LOC_ARUCO_ODO_FUSION_DIST?: string;
    LOC_ARUCO_ODO_FUSION_RATIO?: string;
    LOC_CHECK_DIST?: string;
    LOC_CHECK_IE?: string;
    LOC_CHECK_IR?: string;
    LOC_ICP_COST_THRESHOLD?: string;
    LOC_ICP_COST_THRESHOLD_0?: string;
    LOC_ICP_ERROR_THRESHOLD?: string;
    LOC_ICP_MAX_FEATURE_NUM?: string;
    LOC_ICP_ODO_FUSION_RATIO?: string;
    LOC_SURFEL_NUM?: string;
    LOC_SURFEL_RANGE?: string;
}
export declare class MappingDto {
    SLAM_ICP_COST_THRESHOLD?: string;
    SLAM_ICP_DO_ACCUM_NUM?: string;
    SLAM_ICP_DO_ERASE_GAP?: string;
    SLAM_ICP_ERROR_THRESHOLD?: string;
    SLAM_ICP_MAX_FEATURE_NUM?: string;
    SLAM_ICP_VIEW_THRESHOLD?: string;
    SLAM_KFRM_LC_TRY_DIST?: string;
    SLAM_KFRM_LC_TRY_OVERLAP?: string;
    SLAM_KFRM_UPDATE_NUM?: string;
    SLAM_VOXEL_SIZE?: string;
    SLAM_WINDOW_SIZE?: string;
}
export declare class MotorDto {
    MOTOR_DIR?: string;
    MOTOR_GAIN_KD?: string;
    MOTOR_GAIN_KI?: string;
    MOTOR_GAIN_KP?: string;
    MOTOR_GEAR_RATIO?: string;
    MOTOR_ID_L?: string;
    MOTOR_ID_R?: string;
    MOTOR_LIMIT_V?: string;
    MOTOR_LIMIT_V_ACC?: string;
    MOTOR_LIMIT_W?: string;
    MOTOR_LIMIT_W_ACC?: string;
}
export declare class ObsDto {
    OBS_AVOID?: string;
    OBS_DEADZONE?: string;
    OBS_LOCAL_GOAL_D?: string;
    OBS_MAP_GRID_SIZE?: string;
    OBS_MAP_MAX_Z?: string;
    OBS_MAP_MIN_V?: string;
    OBS_MAP_MIN_Z?: string;
    OBS_MAP_RANGE?: string;
    OBS_PATH_MARGIN_X?: string;
    OBS_PATH_MARGIN_Y?: string;
    OBS_PREDICT_TIME?: string;
    OBS_SAFE_MARGIN_X?: string;
    OBS_SAFE_MARGIN_Y?: string;
}
export declare class RobotDto {
    PLATFORM_NAME?: string;
    PLATFORM_TYPE?: string;
}
export declare class LvxDto {
    LVX_TF?: string;
    LVX_FRM_DT?: string;
    LVX_MIN_RANGE?: string;
    LVX_MAX_RANGE?: string;
    LVX_MAX_FEATURE_NUM?: string;
    LVX_SURFEL_NN_NUM?: string;
    LVX_SURFEL_RANGE?: string;
    LVX_COST_THRESHOLD?: string;
    LVX_INLIER_CHECK_DIST?: string;
}
export declare class SettingDto {
    annotation?: AnnotationDto;
    cam?: CamDto;
    control?: ControlDto;
    debug?: DebugDto;
    default?: DefaultDto;
    fms?: FmsDto;
    loc?: LocDto;
    mapping?: MappingDto;
    motor?: MotorDto;
    obs?: ObsDto;
    robot?: RobotDto;
    lvx?: LvxDto;
}
