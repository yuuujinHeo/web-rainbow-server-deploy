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
exports.LocalizationResponseFrs = exports.LocalizationResponseSlamnav = exports.LocalizationResponseDto = exports.LocalizationRequestDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const localization_type_1 = require("./type/localization.type");
const util_1 = require("../../../../util");
const description_1 = require("../../description");
var Description;
(function (Description) {
    Description["COMMAND"] = "\uC704\uCE58\uCD08\uAE30\uD654 \uBA85\uB839";
    Description["RESULT"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.";
    Description["ID"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["X"] = "init \uBAA8\uB4DC\uB85C \uC704\uCE58\uCD08\uAE30\uD654 \uC2DC, \uC9C0\uB3C4\uC0C1 x\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["Y"] = "init \uBAA8\uB4DC\uB85C \uC704\uCE58\uCD08\uAE30\uD654 \uC2DC, \uC9C0\uB3C4\uC0C1 y\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["Z"] = "init \uBAA8\uB4DC\uB85C \uC704\uCE58\uCD08\uAE30\uD654 \uC2DC, \uC9C0\uB3C4\uC0C1 z\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uD2B9\uC815 \uBAA8\uB378\uB9CC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uAC12 0\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["RZ"] = "init \uBAA8\uB4DC\uB85C \uC704\uCE58\uCD08\uAE30\uD654 \uC2DC, \uB85C\uBD07\uC758 z\uCD95 \uBC29\uD5A5\uAC12\uC744 \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [deg] \uC785\uB2C8\uB2E4.";
})(Description || (Description = {}));
class LocalizationRequestDto {
}
exports.LocalizationRequestDto = LocalizationRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: localization_type_1.LocalizationCommand.setInit,
        enum: localization_type_1.LocalizationCommand,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocalizationRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.X,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LocalizationRequestDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.Y,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LocalizationRequestDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.Z,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LocalizationRequestDto.prototype, "z", void 0);
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
], LocalizationRequestDto.prototype, "rz", void 0);
class LocalizationResponseDto extends LocalizationRequestDto {
}
exports.LocalizationResponseDto = LocalizationResponseDto;
class LocalizationResponseSlamnav extends LocalizationResponseDto {
}
exports.LocalizationResponseSlamnav = LocalizationResponseSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocalizationResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LocalizationResponseSlamnav.prototype, "result", void 0);
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
], LocalizationResponseSlamnav.prototype, "message", void 0);
class LocalizationResponseFrs {
}
exports.LocalizationResponseFrs = LocalizationResponseFrs;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: description_1.FrsDescription.ROBOT_SERIAL,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LocalizationResponseFrs.prototype, "robotSerial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '위치초기화 명령에 대한 결과입니다.',
        type: LocalizationResponseDto,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LocalizationResponseFrs.prototype, "result", void 0);
