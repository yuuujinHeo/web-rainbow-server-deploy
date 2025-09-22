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
exports.GetPresetListResponseDto = exports.GetPresetListRequestDto = exports.CreatePresetResponseDto = exports.CreatePresetRequestDto = exports.DeletePresetResponseDto = exports.DeletePresetRequestDto = exports.SavePresetResponseDto = exports.SavePresetRequestDto = exports.GetPresetResponseDto = exports.GetPresetRequestDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const preset_type_1 = require("./type/preset.type");
var Description;
(function (Description) {
    Description["Type"] = "\uC138\uD305 \uD0C0\uC785";
    Description["Name"] = "\uD504\uB9AC\uC14B \uC774\uB984";
    Description["Data"] = "\uD504\uB9AC\uC14B \uC138\uD305 \uB370\uC774\uD130";
    Description["List_Type"] = "\uD504\uB9AC\uC14B \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC62C \uC138\uD305 \uD0C0\uC785\uC744 \uC785\uB825\uD558\uC138\uC694";
    Description["List"] = "\uC138\uD305 \uD504\uB9AC\uC14B \uB9AC\uC2A4\uD2B8. \uC2E4\uC81C \uD30C\uC77C\uBA85\uC740 preset_{number}.json \uD615\uC2DD\uC785\uB2C8\uB2E4.";
})(Description || (Description = {}));
class GetPresetRequestDto {
}
exports.GetPresetRequestDto = GetPresetRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: Description.Type,
        example: 'SRV',
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetPresetRequestDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: Description.Name,
        example: 'test',
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetPresetRequestDto.prototype, "name", void 0);
class GetPresetResponseDto extends GetPresetRequestDto {
}
exports.GetPresetResponseDto = GetPresetResponseDto;
__decorate([
    (0, class_validator_1.IsJSON)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: Description.Data,
        example: preset_type_1.PresetDto,
        required: true,
    }),
    __metadata("design:type", preset_type_1.PresetDto)
], GetPresetResponseDto.prototype, "data", void 0);
class SavePresetRequestDto extends GetPresetRequestDto {
}
exports.SavePresetRequestDto = SavePresetRequestDto;
__decorate([
    (0, class_validator_1.IsJSON)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: Description.Data,
        example: preset_type_1.PresetDto,
        required: true,
    }),
    __metadata("design:type", preset_type_1.PresetDto)
], SavePresetRequestDto.prototype, "data", void 0);
class SavePresetResponseDto extends SavePresetRequestDto {
}
exports.SavePresetResponseDto = SavePresetResponseDto;
class DeletePresetRequestDto extends GetPresetRequestDto {
}
exports.DeletePresetRequestDto = DeletePresetRequestDto;
class DeletePresetResponseDto extends DeletePresetRequestDto {
}
exports.DeletePresetResponseDto = DeletePresetResponseDto;
class CreatePresetRequestDto extends GetPresetRequestDto {
}
exports.CreatePresetRequestDto = CreatePresetRequestDto;
class CreatePresetResponseDto extends CreatePresetRequestDto {
}
exports.CreatePresetResponseDto = CreatePresetResponseDto;
class GetPresetListRequestDto {
}
exports.GetPresetListRequestDto = GetPresetListRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: Description.List_Type,
        example: 'SRV',
        required: true,
    }),
    __metadata("design:type", String)
], GetPresetListRequestDto.prototype, "type", void 0);
class GetPresetListResponseDto extends GetPresetListRequestDto {
}
exports.GetPresetListResponseDto = GetPresetListResponseDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: Description.List,
        example: ['1', 'test', 'fast'],
        required: true,
    }),
    __metadata("design:type", Array)
], GetPresetListResponseDto.prototype, "list", void 0);
