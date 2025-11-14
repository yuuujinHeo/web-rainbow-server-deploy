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
exports.ExAccessoryStatusDto = exports.TemperatureSensorStatusDto = exports.FootStatusDto = exports.ExAccessoryResponseExAccessory = exports.ExAccessoryRequestExAccessory = exports.ExAccessoryResponseDto = exports.ExAccessoryRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const control_type_1 = require("./type/control.type");
const class_transformer_1 = require("class-transformer");
var FootStatus;
(function (FootStatus) {
    FootStatus[FootStatus["idle"] = 0] = "idle";
    FootStatus[FootStatus["init"] = 1] = "init";
    FootStatus[FootStatus["moving"] = 2] = "moving";
    FootStatus[FootStatus["emoStop"] = 3] = "emoStop";
    FootStatus[FootStatus["upDone"] = 4] = "upDone";
    FootStatus[FootStatus["downDone"] = 5] = "downDone";
})(FootStatus || (FootStatus = {}));
class ExAccessoryRequestDto {
}
exports.ExAccessoryRequestDto = ExAccessoryRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '외부 악세사리 명령',
        example: control_type_1.ControlCommand.footMove,
        required: true,
    }),
    __metadata("design:type", String)
], ExAccessoryRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot 명령 파라미터 (Foot 위치 값)',
        example: 100,
        required: false,
    }),
    __metadata("design:type", Number)
], ExAccessoryRequestDto.prototype, "position", void 0);
class ExAccessoryResponseDto extends ExAccessoryRequestDto {
}
exports.ExAccessoryResponseDto = ExAccessoryResponseDto;
class ExAccessoryRequestExAccessory extends ExAccessoryRequestDto {
}
exports.ExAccessoryRequestExAccessory = ExAccessoryRequestExAccessory;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '명령의 id값. 서버에서 자동 생성됩니다.',
        example: '550e8400-e29b-41d4-a716-446655440000',
        required: true,
    }),
    __metadata("design:type", String)
], ExAccessoryRequestExAccessory.prototype, "id", void 0);
class ExAccessoryResponseExAccessory extends ExAccessoryRequestExAccessory {
}
exports.ExAccessoryResponseExAccessory = ExAccessoryResponseExAccessory;
class FootStatusDto {
}
exports.FootStatusDto = FootStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot 연결 상태',
        example: true,
    }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], FootStatusDto.prototype, "connection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot 위치 값',
        example: 100,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FootStatusDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot이 바닥을 지지하고 있는 상태 여부',
        example: false,
    }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], FootStatusDto.prototype, "is_down", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot 상태',
        example: FootStatus.moving,
        enum: FootStatus,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FootStatusDto.prototype, "foot_status", void 0);
class TemperatureSensorStatusDto {
}
exports.TemperatureSensorStatusDto = TemperatureSensorStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '온도센서 연결 상태',
        example: true,
    }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], TemperatureSensorStatusDto.prototype, "connection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '온도센서 측정값',
        example: 25,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], TemperatureSensorStatusDto.prototype, "temperature_value", void 0);
class ExAccessoryStatusDto {
}
exports.ExAccessoryStatusDto = ExAccessoryStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot 상태',
        type: FootStatusDto,
    }),
    __metadata("design:type", FootStatusDto)
], ExAccessoryStatusDto.prototype, "foot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '온도센서 상태',
        type: TemperatureSensorStatusDto,
    }),
    __metadata("design:type", TemperatureSensorStatusDto)
], ExAccessoryStatusDto.prototype, "temperature_sensor", void 0);
