"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingDto = exports.LvxDto = exports.RobotDto = exports.ObsDto = exports.MotorDto = exports.MappingDto = exports.LocDto = exports.FmsDto = exports.DefaultDto = exports.DebugDto = exports.ControlDto = exports.CamDto = exports.AnnotationDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class AnnotationDto {
}
exports.AnnotationDto = AnnotationDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '어노테이션 QA 스텝',
        example: '0.3',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AnnotationDto.prototype, "ANNOT_QA_STEP", void 0);
class CamDto {
}
exports.CamDto = CamDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '카메라 최대 높이',
        example: '1.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CamDto.prototype, "CAM_HEIGHT_MAX", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '카메라 최소 높이',
        example: '0.1',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CamDto.prototype, "CAM_HEIGHT_MIN", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    (0, swagger_1.ApiProperty)({
        description: '카메라 TF 0',
        example: '0.2292,0.0875,0.2,62.0,0.0,115.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CamDto.prototype, "CAM_TF_0", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    (0, swagger_1.ApiProperty)({
        description: '카메라 TF 1',
        example: '0.2292,-0.0875,0.2,-62.0,0.0,-115.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CamDto.prototype, "CAM_TF_1", void 0);
class ControlDto {
}
exports.ControlDto = ControlDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '드라이브 확장 제어 시간',
        example: '1.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ControlDto.prototype, "DRIVE_EXTENDED_CONTROL_TIME", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '드라이브 목표 접근 게인',
        example: '1.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ControlDto.prototype, "DRIVE_GOAL_APPROACH_GAIN", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '드라이브 목표 거리',
        example: '0.1',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ControlDto.prototype, "DRIVE_GOAL_D", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '드라이브 목표 각도',
        example: '5.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ControlDto.prototype, "DRIVE_GOAL_TH", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '드라이브 속도 데드존',
        example: '0.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ControlDto.prototype, "DRIVE_V_DEADZONE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '드라이브 각속도 데드존',
        example: '0.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ControlDto.prototype, "DRIVE_W_DEADZONE", void 0);
class DebugDto {
}
exports.DebugDto = DebugDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: '시뮬레이션 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_SIM", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: 'IMU 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_IMU", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: 'BLIDAR 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_BLIDAR", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: 'BQR 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_BQR", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: 'BEEP 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_BEEP", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: '카메라 사용 여부',
        example: '1',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_CAM", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: 'RTSP 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_RTSP", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: 'RRS 사용 여부',
        example: '1',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_RRS", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: 'FMS 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_FMS", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: 'QTUI 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_QTUI", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: 'ARUCO 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_ARUCO", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: '얼리스톱 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_EARLYSTOP", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: 'LVX 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_LVX", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: '협업 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_COOP", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: '멀티 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DebugDto.prototype, "USE_MULTI", void 0);
class DefaultDto {
}
exports.DefaultDto = DefaultDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '라이다 최대 범위',
        example: '40.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "LIDAR_MAX_RANGE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '라이다 최소 범위',
        example: '0.5',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "LIDAR_MIN_RANGE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    (0, swagger_1.ApiProperty)({
        description: '라이다 TF 뒤쪽',
        example: '0.0, 0.0, 0.0, 0.0, 0.0, 0.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "LIDAR_TF_B", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    (0, swagger_1.ApiProperty)({
        description: '라이다 TF 앞쪽',
        example: '0.17, 0.0, 0.0, 0.0, 0.0, -178.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "LIDAR_TF_F", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로봇 크기 최소 X',
        example: '-0.35',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "ROBOT_SIZE_MIN_X", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로봇 크기 최대 X',
        example: '0.4',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "ROBOT_SIZE_MAX_X", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로봇 크기 최소 Y',
        example: '-0.35',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "ROBOT_SIZE_MIN_Y", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로봇 크기 최대 Y',
        example: '0.35',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "ROBOT_SIZE_MAX_Y", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로봇 크기 최소 Z',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "ROBOT_SIZE_MIN_Z", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로봇 크기 최대 Z',
        example: '0.22',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "ROBOT_SIZE_MAX_Z", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로봇 휠베이스',
        example: '0.387',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "ROBOT_WHEEL_BASE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로봇 휠 반지름',
        example: '0.0635',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DefaultDto.prototype, "ROBOT_WHEEL_RADIUS", void 0);
class FmsDto {
}
exports.FmsDto = FmsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'FMS 서버 ID',
        example: 'tw',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FmsDto.prototype, "SERVER_ID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'FMS 서버 IP',
        example: '127.0.0.1',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FmsDto.prototype, "SERVER_IP", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'FMS 서버 비밀번호',
        example: 'rainbow',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FmsDto.prototype, "SERVER_PW", void 0);
class LocDto {
}
exports.LocDto = LocDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 ARUCO ODO 융합 거리',
        example: '2.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_ARUCO_ODO_FUSION_DIST", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 ARUCO ODO 융합 비율',
        example: '0.8',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_ARUCO_ODO_FUSION_RATIO", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 체크 거리',
        example: '0.3',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_CHECK_DIST", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 체크 IE',
        example: '0.2',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_CHECK_IE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 체크 IR',
        example: '0.4',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_CHECK_IR", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 ICP 비용 임계값',
        example: '0.3',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_ICP_COST_THRESHOLD", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 ICP 비용 임계값 0',
        example: '1.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_ICP_COST_THRESHOLD_0", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 ICP 오류 임계값',
        example: '0.2',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_ICP_ERROR_THRESHOLD", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 ICP 최대 특징 수',
        example: '1000',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_ICP_MAX_FEATURE_NUM", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 ICP ODO 융합 비율',
        example: '0.5',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_ICP_ODO_FUSION_RATIO", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 서펠 수',
        example: '3',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_SURFEL_NUM", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 서펠 범위',
        example: '0.15',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocDto.prototype, "LOC_SURFEL_RANGE", void 0);
class MappingDto {
}
exports.MappingDto = MappingDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'SLAM ICP 비용 임계값',
        example: '0.5',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingDto.prototype, "SLAM_ICP_COST_THRESHOLD", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'SLAM ICP 누적 수',
        example: '2',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingDto.prototype, "SLAM_ICP_DO_ACCUM_NUM", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'SLAM ICP 지우기 간격',
        example: '10',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingDto.prototype, "SLAM_ICP_DO_ERASE_GAP", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'SLAM ICP 오류 임계값',
        example: '0.2',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingDto.prototype, "SLAM_ICP_ERROR_THRESHOLD", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'SLAM ICP 최대 특징 수',
        example: '1000',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingDto.prototype, "SLAM_ICP_MAX_FEATURE_NUM", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'SLAM ICP 뷰 임계값',
        example: '170',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingDto.prototype, "SLAM_ICP_VIEW_THRESHOLD", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'SLAM 키프레임 LC 시도 거리',
        example: '3.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingDto.prototype, "SLAM_KFRM_LC_TRY_DIST", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'SLAM 키프레임 LC 시도 오버랩',
        example: '0.25',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingDto.prototype, "SLAM_KFRM_LC_TRY_OVERLAP", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'SLAM 키프레임 업데이트 수',
        example: '50',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingDto.prototype, "SLAM_KFRM_UPDATE_NUM", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'SLAM 복셀 크기',
        example: '0.05',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingDto.prototype, "SLAM_VOXEL_SIZE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'SLAM 윈도우 크기',
        example: '100',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingDto.prototype, "SLAM_WINDOW_SIZE", void 0);
class MotorDto {
}
exports.MotorDto = MotorDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: '모터 방향',
        example: '1',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotorDto.prototype, "MOTOR_DIR", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '모터 게인 KD',
        example: '4400',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotorDto.prototype, "MOTOR_GAIN_KD", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '모터 게인 KI',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotorDto.prototype, "MOTOR_GAIN_KI", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '모터 게인 KP',
        example: '100',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotorDto.prototype, "MOTOR_GAIN_KP", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '모터 기어 비율',
        example: '3.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotorDto.prototype, "MOTOR_GEAR_RATIO", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: '모터 ID 왼쪽',
        example: '1',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotorDto.prototype, "MOTOR_ID_L", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: '모터 ID 오른쪽',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotorDto.prototype, "MOTOR_ID_R", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '모터 속도 제한',
        example: '2.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotorDto.prototype, "MOTOR_LIMIT_V", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '모터 속도 가속도 제한',
        example: '1.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotorDto.prototype, "MOTOR_LIMIT_V_ACC", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '모터 각속도 제한',
        example: '180',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotorDto.prototype, "MOTOR_LIMIT_W", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '모터 각속도 가속도 제한',
        example: '180',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MotorDto.prototype, "MOTOR_LIMIT_W_ACC", void 0);
class ObsDto {
}
exports.ObsDto = ObsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    (0, swagger_1.ApiProperty)({
        description: '장애물 회피 사용 여부',
        example: '0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_AVOID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 데드존',
        example: '0.7',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_DEADZONE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 로컬 목표 거리',
        example: '4.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_LOCAL_GOAL_D", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 맵 그리드 크기',
        example: '0.05',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_MAP_GRID_SIZE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 맵 최대 Z',
        example: '1.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_MAP_MAX_Z", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 맵 최소 속도',
        example: '0.3',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_MAP_MIN_V", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 맵 최소 Z',
        example: '-1.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_MAP_MIN_Z", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 맵 범위',
        example: '5.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_MAP_RANGE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 경로 마진 X',
        example: '0.05',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_PATH_MARGIN_X", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 경로 마진 Y',
        example: '0.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_PATH_MARGIN_Y", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 예측 시간',
        example: '3.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_PREDICT_TIME", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 안전 마진 X',
        example: '0.1',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_SAFE_MARGIN_X", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '장애물 안전 마진 Y',
        example: '0.1',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsDto.prototype, "OBS_SAFE_MARGIN_Y", void 0);
class RobotDto {
}
exports.RobotDto = RobotDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '플랫폼 이름',
        example: 'TT',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], RobotDto.prototype, "PLATFORM_NAME", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: '플랫폼 타입',
        example: 'SRV',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], RobotDto.prototype, "PLATFORM_TYPE", void 0);
class LvxDto {
}
exports.LvxDto = LvxDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    (0, swagger_1.ApiProperty)({
        description: 'LVX TF',
        example: '-0.2079,0.0,1.34,0.0,0.0,90.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LvxDto.prototype, "LVX_TF", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'LVX 프레임 DT',
        example: '0.1',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LvxDto.prototype, "LVX_FRM_DT", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'LVX 최소 범위',
        example: '1.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LvxDto.prototype, "LVX_MIN_RANGE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'LVX 최대 범위',
        example: '40.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LvxDto.prototype, "LVX_MAX_RANGE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'LVX 최대 특징 수',
        example: '500',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LvxDto.prototype, "LVX_MAX_FEATURE_NUM", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'LVX 서펠 NN 수',
        example: '1',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LvxDto.prototype, "LVX_SURFEL_NN_NUM", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'LVX 서펠 범위',
        example: '1.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LvxDto.prototype, "LVX_SURFEL_RANGE", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'LVX 비용 임계값',
        example: '1.0',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LvxDto.prototype, "LVX_COST_THRESHOLD", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'LVX 인라이너 체크 거리',
        example: '0.3',
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LvxDto.prototype, "LVX_INLIER_CHECK_DIST", void 0);
class SettingDto {
}
exports.SettingDto = SettingDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '어노테이션 설정',
        type: AnnotationDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", AnnotationDto)
], SettingDto.prototype, "annotation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카메라 설정',
        type: CamDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", CamDto)
], SettingDto.prototype, "cam", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '제어 설정',
        type: ControlDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", ControlDto)
], SettingDto.prototype, "control", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '디버그 설정',
        type: DebugDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", DebugDto)
], SettingDto.prototype, "debug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '기본 설정',
        type: DefaultDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", DefaultDto)
], SettingDto.prototype, "default", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'FMS 설정',
        type: FmsDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", FmsDto)
], SettingDto.prototype, "fms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로컬라이제이션 설정',
        type: LocDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", LocDto)
], SettingDto.prototype, "loc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '매핑 설정',
        type: MappingDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", MappingDto)
], SettingDto.prototype, "mapping", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '모터 설정',
        type: MotorDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", MotorDto)
], SettingDto.prototype, "motor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물 설정',
        type: ObsDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", ObsDto)
], SettingDto.prototype, "obs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로봇 설정',
        type: RobotDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", RobotDto)
], SettingDto.prototype, "robot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'LVX 설정',
        type: LvxDto,
        required: false,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", LvxDto)
], SettingDto.prototype, "lvx", void 0);
