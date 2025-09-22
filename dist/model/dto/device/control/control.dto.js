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
exports.SafetyFieldResponseDto = exports.SafetyFieldRequestDto = exports.WorkResponseDto = exports.WorkRequestDto = exports.OnOffResponseDto = exports.OnOffRequestDto = exports.LEDResponseDto = exports.LEDRequestDto = exports.ControlResponseFrs = exports.ControlResponseSlamnav = exports.ControlResponseDto = exports.ControlRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const control_type_1 = require("./type/control.type");
const util_1 = require("../../../../util");
var Description;
(function (Description) {
    Description["COMMAND"] = "\uC2E4\uD589\uD560 \uCEE8\uD2B8\uB864 \uBA85\uB839";
    Description["ID"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["RESULT"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.";
    Description["ONOFF"] = "LED \uC218\uB3D9\uC81C\uC5B4\uAE30\uB2A5\uC744 \uCF1C\uACE0 \uB04C\uC9C0\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4. \uAC12\uC774 true\uC77C \uB54C \uC694\uCCAD\uD558\uB294 color \uAC12\uC744 \uC0AC\uC6A9\uD558\uBA70, \uAC12\uC774 false\uC778 \uACBD\uC6B0\uC5D0\uB294 \uC218\uB3D9\uC81C\uC5B4\uAE30\uB2A5\uC744 \uB044\uACE0 color \uAC12\uB3C4 \uBB34\uC2DC\uD569\uB2C8\uB2E4. \uB85C\uBD07\uC758 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uC790\uB3D9\uC73C\uB85C LED \uC0C9\uC0C1\uC774 \uBCC0\uACBD\uB429\uB2C8\uB2E4.";
    Description["LED"] = "LED \uC0C9\uC0C1\uC744 \uC785\uB825\uD569\uB2C8\uB2E4. onoff\uAC00 true\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uB429\uB2C8\uB2E4.";
    Description["FREQ"] = "\uAE30\uB2A5\uC5D0 \uB530\uB77C onoff\uAC00 true\uC77C \uC2DC, \uC804\uC1A1 \uC8FC\uAE30\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 Hz\uC774\uBA70 \uC608\uB85C lidarOnOff\uB97C on\uD558\uACE0 frequency\uB97C 10\uC73C\uB85C \uC785\uB825\uD558\uBA74 lidar \uB370\uC774\uD130\uB97C 10Hz\uB85C \uC1A1\uC2E0\uD569\uB2C8\uB2E4.";
    Description["ROBOT_SERIAL"] = "\uB85C\uBD07 \uC2DC\uB9AC\uC5BC \uBC88\uD638";
    Description["SAFETY_FIELD"] = "\uC548\uC804 \uD544\uB4DC \uC124\uC815. \uC0AC\uC804\uC5D0 \uC124\uC815\uB41C \uC548\uC804\uD544\uB4DC ID\uAC12\uC744 \uC785\uB825\uD558\uC138\uC694";
})(Description || (Description = {}));
class ControlRequestDto {
}
exports.ControlRequestDto = ControlRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: control_type_1.ControlCommand.dockStart,
        enum: control_type_1.ControlCommand,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ControlRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ONOFF,
        example: true,
        type: 'boolean',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], ControlRequestDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.LED,
        example: control_type_1.LEDColor.red,
        enum: control_type_1.LEDColor,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], ControlRequestDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.FREQ,
        example: 10,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], ControlRequestDto.prototype, "frequency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.SAFETY_FIELD,
        example: '1',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ControlRequestDto.prototype, "safetyField", void 0);
class ControlResponseDto extends ControlRequestDto {
}
exports.ControlResponseDto = ControlResponseDto;
class ControlResponseSlamnav extends ControlResponseDto {
}
exports.ControlResponseSlamnav = ControlResponseSlamnav;
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
], ControlResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], ControlResponseSlamnav.prototype, "result", void 0);
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
], ControlResponseSlamnav.prototype, "message", void 0);
class ControlResponseFrs {
}
exports.ControlResponseFrs = ControlResponseFrs;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ROBOT_SERIAL,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], ControlResponseFrs.prototype, "robotSerial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '컨트롤 명령 결과',
        type: ControlResponseDto,
        required: true,
    }),
    __metadata("design:type", ControlResponseDto)
], ControlResponseFrs.prototype, "data", void 0);
class LEDRequestDto {
}
exports.LEDRequestDto = LEDRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'LED 수동제어기능을 켜고 끌지를 결정합니다. 값이 true일 때 요청하는 color 값을 사용하며, 값이 false인 경우에는 수동제어기능을 끄고 color 값도 무시합니다. 로봇의 상태에 따라 자동으로 LED 색상이 변경됩니다.',
        example: true,
        type: 'boolean',
        required: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], LEDRequestDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'LED 색상을 입력합니다. onoff가 true일 경우에만 사용됩니다.',
        example: control_type_1.LEDColor.red,
        enum: control_type_1.LEDColor,
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LEDRequestDto.prototype, "color", void 0);
class LEDResponseDto {
}
exports.LEDResponseDto = LEDResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'LED를 켰는지/껐는지 여부', example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], LEDResponseDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'LED 색상', example: control_type_1.LEDColor.red, enum: control_type_1.LEDColor, required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LEDResponseDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '실행한 명령', example: 'ledControl' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LEDResponseDto.prototype, "command", void 0);
class OnOffRequestDto {
}
exports.OnOffRequestDto = OnOffRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'OnOff 명령을 사용할 Command를 입력하세요. 현재 사용가능한 Command는 lidarOnOff, pathOnOff, motorOnOff가 있습니다.',
        example: 'lidarOnOff',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], OnOffRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '기능을 켜고 끌지를 결정합니다.',
        example: true,
        required: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], OnOffRequestDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '기능에 따라 onoff가 true일 시, 전송 주기를 입력하세요. 단위는 Hz이며 예로 lidarOnOff를 on하고 frequency를 10으로 입력하면 lidar 데이터를 10Hz로 송신합니다.',
        example: 10,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], OnOffRequestDto.prototype, "frequency", void 0);
class OnOffResponseDto {
}
exports.OnOffResponseDto = OnOffResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'OnOff 명령을 실행한 Command',
        example: 'lidarOnOff',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], OnOffResponseDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '기능을 켰는지/껐는지 여부',
        example: true,
        required: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], OnOffResponseDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '주기(Hz). onoff가 true일 때만 의미 있음',
        example: 10,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], OnOffResponseDto.prototype, "frequency", void 0);
class WorkRequestDto {
}
exports.WorkRequestDto = WorkRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '실행할 Command를 입력하세요. 현재 사용가능한 Command는 dockRequest, undockRequest, randomSeq가 있습니다.',
        example: 'dockRequest',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], WorkRequestDto.prototype, "command", void 0);
class WorkResponseDto {
}
exports.WorkResponseDto = WorkResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '실행한 명령', example: 'dockRequest' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], WorkResponseDto.prototype, "command", void 0);
class SafetyFieldRequestDto {
}
exports.SafetyFieldRequestDto = SafetyFieldRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '세이프티 영역', example: '1' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SafetyFieldRequestDto.prototype, "safetyField", void 0);
class SafetyFieldResponseDto extends SafetyFieldRequestDto {
}
exports.SafetyFieldResponseDto = SafetyFieldResponseDto;
