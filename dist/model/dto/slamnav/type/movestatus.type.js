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
exports.MoveStatusSlamnav = exports.CurNodeDto = exports.GoalNodeDto = exports.VelocityStatusDto = exports.PoseStatusDto = exports.MoveStateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const util_1 = require("../../../../util");
const state_type_1 = require("./state.type");
const state_type_2 = require("./state.type");
var Description;
(function (Description) {
    Description["MOVE_AUTO"] = "\uC790\uC728\uC8FC\uD589 \uC774\uB3D9 \uC0C1\uD0DC";
    Description["MOVE_DOCK"] = "\uB3C4\uD0B9 \uC774\uB3D9 \uC0C1\uD0DC";
    Description["MOVE_JOG"] = "\uC870\uC774\uC2A4\uD2F1 \uC774\uB3D9 \uC0C1\uD0DC";
    Description["MOVE_OBS"] = "\uC8FC\uD589 \uC911 \uC7A5\uC560\uBB3C \uC0C1\uD0DC";
    Description["MOVE_PATH"] = "\uC8FC\uD589 \uACBD\uB85C\uC694\uCCAD \uC0C1\uD0DC";
    Description["POSE"] = "\uB85C\uBD07 \uAE00\uB85C\uBC8C\uC88C\uD45C. \uC704\uCE58\uCD08\uAE30\uD654\uAC00 good\uC778 \uC0C1\uD0DC\uC77C\uB54C \uC720\uC758\uBBF8 \uD569\uB2C8\uB2E4.";
    Description["VELOCITY"] = "\uB85C\uBD07 \uC8FC\uD589 \uC18D\uB3C4";
    Description["GOAL_NODE"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uC815\uBCF4 \uBC0F \uC0C1\uD0DC";
    Description["GOAL_NODE_ID"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uB178\uB4DC ID";
    Description["GOAL_NODE_NAME"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uB178\uB4DC \uC774\uB984";
    Description["GOAL_NODE_STATE"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uC774\uB3D9 \uC0C1\uD0DC";
    Description["GOAL_NODE_XYZ"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uAE00\uB85C\uBC8C \uC88C\uD45C";
    Description["CUR_NODE"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uC815\uBCF4 \uBC0F \uC0C1\uD0DC";
    Description["CUR_NODE_ID"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uB178\uB4DC ID";
    Description["CUR_NODE_NAME"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uB178\uB4DC \uC774\uB984";
    Description["CUR_NODE_XYZ"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uAE00\uB85C\uBC8C \uC88C\uD45C";
    Description["MOVE_STATE"] = "\uC774\uB3D9 \uC0C1\uD0DC \uAD00\uB828 \uC815\uBCF4";
    Description["TIME"] = "\uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uC2DC\uAC04. ms \uB2E8\uC704";
})(Description || (Description = {}));
class MoveStateDto {
}
exports.MoveStateDto = MoveStateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_AUTO,
        example: state_type_1.MoveState.notReady,
        enum: state_type_1.MoveState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveStateDto.prototype, "auto_move", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_DOCK,
        example: 'none',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveStateDto.prototype, "dock_move", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_JOG,
        example: 'none',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveStateDto.prototype, "jog_move", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_OBS,
        example: state_type_1.ObsState.none,
        enum: state_type_1.ObsState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveStateDto.prototype, "obs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_PATH,
        example: state_type_1.PathState.none,
        enum: state_type_1.PathState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveStateDto.prototype, "path", void 0);
class PoseStatusDto {
}
exports.PoseStatusDto = PoseStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], PoseStatusDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], PoseStatusDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], PoseStatusDto.prototype, "rz", void 0);
class VelocityStatusDto {
}
exports.VelocityStatusDto = VelocityStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VELOCITY,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], VelocityStatusDto.prototype, "vx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VELOCITY,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], VelocityStatusDto.prototype, "vy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VELOCITY,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], VelocityStatusDto.prototype, "wz", void 0);
class GoalNodeDto {
}
exports.GoalNodeDto = GoalNodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_ID,
        example: 'goal_1',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_NAME,
        example: 'goal_1',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_STATE,
        example: state_type_2.GoalState.none,
        enum: state_type_2.GoalState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "rz", void 0);
class CurNodeDto {
}
exports.CurNodeDto = CurNodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE_ID,
        example: 'goal_1',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CurNodeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE_NAME,
        example: 'goal_1',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CurNodeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CurNodeDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CurNodeDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CurNodeDto.prototype, "rz", void 0);
class MoveStatusSlamnav {
}
exports.MoveStatusSlamnav = MoveStatusSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_STATE,
        required: false,
    }),
    __metadata("design:type", MoveStateDto)
], MoveStatusSlamnav.prototype, "move_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        required: false,
    }),
    __metadata("design:type", PoseStatusDto)
], MoveStatusSlamnav.prototype, "pose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VELOCITY,
        required: false,
    }),
    __metadata("design:type", VelocityStatusDto)
], MoveStatusSlamnav.prototype, "vel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE,
        required: false,
    }),
    __metadata("design:type", GoalNodeDto)
], MoveStatusSlamnav.prototype, "goal_node", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE,
        required: false,
    }),
    __metadata("design:type", CurNodeDto)
], MoveStatusSlamnav.prototype, "cur_node", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TIME,
        example: util_1.DateUtil.getTimeString(),
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MoveStatusSlamnav.prototype, "time", void 0);
