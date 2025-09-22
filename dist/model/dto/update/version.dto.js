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
exports.GetCurrentVersionResponseSocketDto = exports.GetCurrentVersionRequestSocketDto = exports.GetCurrentVersionResponseDto = exports.GetCurrentVersionRequestDto = exports.GetNewVersionResponseDto = exports.GetNewVersionRequestDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const url_util_1 = require("../../../util/url.util");
var Description;
(function (Description) {
    Description["BRANCH"] = "\uBE0C\uB79C\uCE58 \uC774\uB984";
    Description["SOFTWARE"] = "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC885\uB958 (\uC608: rrs, slamnav2)";
    Description["VERSION"] = "version \uC815\uBCF4";
    Description["HOTFIX"] = "hotfix \uC5EC\uBD80. hotfix\uAC00 true\uC778 \uACBD\uC6B0, \uC790\uB3D9 \uC5C5\uB370\uC774\uD2B8\uAC00 \uC694\uAD6C\uB429\uB2C8\uB2E4.";
    Description["ID"] = "\uC694\uCCAD\uC5D0 \uB300\uD55C ID \uAC12. \uC11C\uBC84\uC5D0\uC11C \uC790\uB3D9\uC0DD\uC131\uB418\uBA70 \uC751\uB2F5\uC5D0 \uB3D9\uC77C\uD55C ID \uAC12 \uBC18\uD658 \uD544\uC694.";
    Description["RESULT"] = "\uC5C5\uB370\uC774\uD2B8 \uACB0\uACFC";
    Description["MESSAGE"] = "\uC5C5\uB370\uC774\uD2B8 \uBA54\uC2DC\uC9C0";
})(Description || (Description = {}));
class GetNewVersionRequestDto {
}
exports.GetNewVersionRequestDto = GetNewVersionRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: Description.SOFTWARE,
        example: 'slamnav2',
    }),
    __metadata("design:type", String)
], GetNewVersionRequestDto.prototype, "software", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
        default: 'main',
    }),
    __metadata("design:type", String)
], GetNewVersionRequestDto.prototype, "branch", void 0);
class GetNewVersionResponseDto extends GetNewVersionRequestDto {
}
exports.GetNewVersionResponseDto = GetNewVersionResponseDto;
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.VERSION,
        example: '1.0.0',
    }),
    __metadata("design:type", String)
], GetNewVersionResponseDto.prototype, "version", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.HOTFIX,
        example: true,
    }),
    __metadata("design:type", Boolean)
], GetNewVersionResponseDto.prototype, "hotfix", void 0);
class GetCurrentVersionRequestDto {
}
exports.GetCurrentVersionRequestDto = GetCurrentVersionRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: Description.SOFTWARE,
        example: 'slamnav2',
    }),
    __metadata("design:type", String)
], GetCurrentVersionRequestDto.prototype, "software", void 0);
class GetCurrentVersionResponseDto extends GetCurrentVersionRequestDto {
}
exports.GetCurrentVersionResponseDto = GetCurrentVersionResponseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.VERSION,
        example: '1.0.0',
    }),
    __metadata("design:type", String)
], GetCurrentVersionResponseDto.prototype, "version", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
        default: 'main',
    }),
    __metadata("design:type", String)
], GetCurrentVersionResponseDto.prototype, "branch", void 0);
class GetCurrentVersionRequestSocketDto {
}
exports.GetCurrentVersionRequestSocketDto = GetCurrentVersionRequestSocketDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.ID,
        example: url_util_1.UrlUtil.generateUUID(),
    }),
    __metadata("design:type", String)
], GetCurrentVersionRequestSocketDto.prototype, "id", void 0);
class GetCurrentVersionResponseSocketDto extends GetCurrentVersionRequestSocketDto {
}
exports.GetCurrentVersionResponseSocketDto = GetCurrentVersionResponseSocketDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.VERSION,
        example: '1.0.0',
    }),
    __metadata("design:type", String)
], GetCurrentVersionResponseSocketDto.prototype, "version", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
        default: 'main',
    }),
    __metadata("design:type", String)
], GetCurrentVersionResponseSocketDto.prototype, "branch", void 0);
