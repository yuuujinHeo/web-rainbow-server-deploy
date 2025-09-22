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
exports.MoveLogLastResponseDto = exports.MoveLogLastRequestDto = exports.MoveLogResponseDto = exports.MoveLogRequestDto = exports.MoveResponseFrs = exports.MoveResponseSlamnav = exports.MoveResponseDto = exports.MoveTargetCommandDto = exports.MoveGoalCommandDto = exports.MoveRequestDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const move_type_1 = require("./type/move.type");
const util_1 = require("../../../../util");
const search_request_1 = require("../../../../pagination/search.request");
const pagination_1 = require("../../../../pagination");
var Description;
(function (Description) {
    Description["COMMAND"] = "\uC774\uB3D9 \uBA85\uB839";
    Description["ID"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["GOALID"] = "goal \uC774\uB3D9 \uC2DC, \uBAA9\uD45C\uC9C0\uC810\uC758 \uB178\uB4DC ID\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Description["METHOD"] = "\uC8FC\uD589 \uBC29\uC2DD. \uAE30\uBCF8\uAC12\uC740 pp(point to point)\uBC29\uC2DD\uC785\uB2C8\uB2E4.";
    Description["PRESET"] = "\uC18D\uB3C4 \uD504\uB9AC\uC14B. \uAE30\uBCF8\uAC12\uC740 0\uC774\uBA70 \uD604\uC7AC \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
    Description["RESULT"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.";
    Description["X"] = "target \uC774\uB3D9 \uC2DC, \uBAA9\uD45C\uC9C0\uC810\uC758 \uC9C0\uB3C4\uC0C1 x\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["Y"] = "target \uC774\uB3D9 \uC2DC, \uBAA9\uD45C\uC9C0\uC810\uC758 \uC9C0\uB3C4\uC0C1 y\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["Z"] = "target \uC774\uB3D9 \uC2DC, \uBAA9\uD45C\uC9C0\uC810\uC758 \uC9C0\uB3C4\uC0C1 z\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uD2B9\uC815 \uBAA8\uB378\uB9CC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uAC12 0\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["RZ"] = "target \uC774\uB3D9 \uC2DC, \uBAA9\uD45C\uC9C0\uC810\uC5D0\uC11C \uB85C\uBD07\uC758 z\uCD95 \uBC29\uD5A5\uAC12\uC744 \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [deg] \uC785\uB2C8\uB2E4.";
    Description["VX"] = "jog \uC774\uB3D9 \uC2DC, \uB85C\uBD07\uC758 x\uBC29\uD5A5 \uC18D\uB3C4\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [m/s] \uC785\uB2C8\uB2E4.";
    Description["VY"] = "jog \uC774\uB3D9 \uC2DC, \uB85C\uBD07\uC758 y\uBC29\uD5A5 \uC18D\uB3C4\uB97C \uC785\uB825\uD558\uC138\uC694. \uD2B9\uC815 \uBAA8\uB378\uB9CC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uAC12 0\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694. \uB2E8\uC704\uB294 [m/s] \uC785\uB2C8\uB2E4.";
    Description["WZ"] = "jog \uC774\uB3D9 \uC2DC, \uB85C\uBD07\uC758 z\uCD95 \uD68C\uC804 \uC18D\uB3C4\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [deg/s] \uC785\uB2C8\uB2E4.";
})(Description || (Description = {}));
class MoveRequestDto {
}
exports.MoveRequestDto = MoveRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: move_type_1.MoveCommand.moveStop,
        enum: move_type_1.MoveCommand,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOALID,
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveRequestDto.prototype, "goalId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.METHOD,
        example: 'pp',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveRequestDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.PRESET,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "preset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.X, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Y, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Z, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RZ,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "rz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VX,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "vx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VY,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "vy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.WZ,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "wz", void 0);
class MoveGoalCommandDto {
}
exports.MoveGoalCommandDto = MoveGoalCommandDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOALID,
        example: 'goal_1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveGoalCommandDto.prototype, "goalId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.METHOD, example: 'pp' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveGoalCommandDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.PRESET, example: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveGoalCommandDto.prototype, "preset", void 0);
class MoveTargetCommandDto {
}
exports.MoveTargetCommandDto = MoveTargetCommandDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.METHOD, example: 'pp' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveTargetCommandDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.PRESET, example: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "preset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.X, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Y, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Z, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.RZ, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "rz", void 0);
class MoveResponseDto extends MoveRequestDto {
}
exports.MoveResponseDto = MoveResponseDto;
class MoveResponseSlamnav extends MoveResponseDto {
}
exports.MoveResponseSlamnav = MoveResponseSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveResponseSlamnav.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MESSAGE,
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveResponseSlamnav.prototype, "message", void 0);
class MoveResponseFrs {
}
exports.MoveResponseFrs = MoveResponseFrs;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로봇의 시리얼번호',
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveResponseFrs.prototype, "robotSerial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '이동 명령 결과', type: MoveResponseDto, required: true }),
    __metadata("design:type", MoveResponseDto)
], MoveResponseFrs.prototype, "data", void 0);
class MoveLogRequestDto extends search_request_1.SearchRequestDto {
}
exports.MoveLogRequestDto = MoveLogRequestDto;
class MoveLogResponseDto extends pagination_1.PaginationResponse {
}
exports.MoveLogResponseDto = MoveLogResponseDto;
class MoveLogLastRequestDto {
}
exports.MoveLogLastRequestDto = MoveLogLastRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '조회할 로그 개수', example: 5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MoveLogLastRequestDto.prototype, "num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '조회할 명령', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(move_type_1.MoveCommand),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], MoveLogLastRequestDto.prototype, "command", void 0);
class MoveLogLastResponseDto {
}
exports.MoveLogLastResponseDto = MoveLogLastResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
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
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], MoveLogLastResponseDto.prototype, "list", void 0);
