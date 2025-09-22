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
exports.SaveSettingResponseDto = exports.SaveSettingRequestDto = exports.GetSettingResponseDto = exports.GetSettingRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const setting_type_1 = require("./type/setting.type");
var Description;
(function (Description) {
    Description["Type"] = "\uC124\uC815 \uD0C0\uC785";
    Description["Data"] = "\uC124\uC815 \uB370\uC774\uD130. \uD615\uC2DD\uC740 \uC608\uC2DC\uC774\uBA70 \uC2E4\uC81C \uD615\uC2DD\uACFC \uB2E4\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4.";
})(Description || (Description = {}));
var Example;
(function (Example) {
    Example["Type"] = "SRV";
})(Example || (Example = {}));
class GetSettingRequestDto {
}
exports.GetSettingRequestDto = GetSettingRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Type, example: Example.Type, required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetSettingRequestDto.prototype, "type", void 0);
class GetSettingResponseDto {
}
exports.GetSettingResponseDto = GetSettingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Type, example: Example.Type, required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetSettingResponseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Data, example: setting_type_1.SettingDto, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", setting_type_1.SettingDto)
], GetSettingResponseDto.prototype, "data", void 0);
class SaveSettingRequestDto {
}
exports.SaveSettingRequestDto = SaveSettingRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Type, example: Example.Type }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSettingRequestDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Data, example: setting_type_1.SettingDto }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", setting_type_1.SettingDto)
], SaveSettingRequestDto.prototype, "data", void 0);
class SaveSettingResponseDto extends SaveSettingRequestDto {
}
exports.SaveSettingResponseDto = SaveSettingResponseDto;
