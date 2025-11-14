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
exports.CobotCommandResponseDto = exports.CobotCommandRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CobotCommandRequestDto {
}
exports.CobotCommandRequestDto = CobotCommandRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '명령을 보낼 협동로봇이 연결된 TCP 포트번호',
        example: '16000',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotCommandRequestDto.prototype, "cobotPort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇으로 보낼 string형태의 명령어. 추후 세분화하여 개편 예정. 현재는 command값을 그대로 협동로봇으로 송신',
        example: 'move',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotCommandRequestDto.prototype, "command", void 0);
class CobotCommandResponseDto extends CobotCommandRequestDto {
}
exports.CobotCommandResponseDto = CobotCommandResponseDto;
