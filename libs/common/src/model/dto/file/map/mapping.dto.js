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
exports.MappingResponseFrs = exports.MappingResponseSlamnav = exports.MappingResponseDto = exports.MappingRequestDto = exports.Description = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const util_1 = require("../../../../util");
const command_domain_1 = require("../../../../../../../apps/file/src/map/domain/command.domain");
var Description;
(function (Description) {
    Description["ID"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["COMMAND"] = "\uC2E4\uD589\uD560 \uBA85\uB839";
    Description["MAPNAME"] = "\uB85C\uB4DC(\uC800\uC7A5)\uD560 \uB9F5 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["FILE"] = "\uC800\uC7A5\uD560 \uD30C\uC77C\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uD655\uC7A5\uC790\uB97C \uD3EC\uD568\uD558\uC5EC \uC785\uB825\uD558\uC138\uC694.";
    Description["EXTENSION"] = "\uB85C\uB4DC(\uC800\uC7A5)\uD560 \uD30C\uC77C\uC758 \uD655\uC7A5\uC790\uB97C \uC785\uB825\uD558\uC138\uC694. cloud\uC758 \uACBD\uC6B0 \uD604\uC7AC csv\uB9CC \uC9C0\uC6D0\uD558\uBA70 topology\uB294 \uD604\uC7AC json \uD615\uC2DD\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4.";
    Description["MAPPING_NAME"] = "\uC0C8\uB85C \uC0DD\uC131\uD55C \uB9F5\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["RESULT"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.";
    Description["TIME"] = "\uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uC2DC\uAC04. ms \uB2E8\uC704";
    Description["TOPO"] = "\uC800\uC7A5\uD560 \uD1A0\uD3F4\uB85C\uC9C0 \uD615\uC2DD\uC744 \uB9DE\uCDB0 \uC785\uB825\uD558\uC138\uC694.";
})(Description || (exports.Description = Description = {}));
class MappingRequestDto {
}
exports.MappingRequestDto = MappingRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: command_domain_1.MapCommand.mappingSave,
        enum: [command_domain_1.MapCommand.mappingSave, command_domain_1.MapCommand.mappingReload, command_domain_1.MapCommand.mappingStart, command_domain_1.MapCommand.mappingStop],
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MAPNAME,
        example: 'Test',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingRequestDto.prototype, "mapName", void 0);
class MappingResponseDto extends MappingRequestDto {
}
exports.MappingResponseDto = MappingResponseDto;
class MappingResponseSlamnav extends MappingResponseDto {
}
exports.MappingResponseSlamnav = MappingResponseSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: 'Test',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingResponseSlamnav.prototype, "result", void 0);
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
], MappingResponseSlamnav.prototype, "message", void 0);
class MappingResponseFrs {
}
exports.MappingResponseFrs = MappingResponseFrs;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'FRS 연결 시 사용하는 로봇 시리얼 번호',
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingResponseFrs.prototype, "robotSerial", void 0);
//# sourceMappingURL=mapping.dto.js.map