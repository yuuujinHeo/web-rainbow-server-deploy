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
exports.GetConfigsResponseDto = exports.GetConfigResponseDto = exports.GetConfigRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GetConfigRequestDto {
}
exports.GetConfigRequestDto = GetConfigRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: '설정 키', example: 'config_key', required: false }),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GetConfigRequestDto.prototype, "key", void 0);
class GetConfigResponseDto {
}
exports.GetConfigResponseDto = GetConfigResponseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: '설정 키', example: 'config_key', required: false }),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GetConfigResponseDto.prototype, "key", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: '설정 값', example: 'config_value', required: false }),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GetConfigResponseDto.prototype, "value", void 0);
class GetConfigsResponseDto {
}
exports.GetConfigsResponseDto = GetConfigsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '설정 목록', example: [{ key: 'config_key', value: 'config_value' }], required: false }),
    __metadata("design:type", Array)
], GetConfigsResponseDto.prototype, "configs", void 0);
