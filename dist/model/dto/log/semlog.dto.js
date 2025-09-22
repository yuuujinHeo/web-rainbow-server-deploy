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
exports.SEMGeneralLogRequestDto = exports.SaveSEMAlarmLogResponseDto = exports.SaveSEMAlarmLogRequestDto = exports.DeleteSEMAlarmRequestDto = exports.SEMAlarmActiveResponseDto = exports.SEMAlarmLogResponseDto = exports.SEMAlarmLogListRequestDto = exports.PostSEMAlarmRequestDto = exports.DeleteAlarmDefineRequestDto = exports.SEMAlarmListResponseDto = exports.SEMAlamrListRequestDto = exports.SEMAlarmLog = exports.SEMAlarm = exports.SEMAlarmActive = void 0;
const pagination_1 = require("../../../pagination");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var Description;
(function (Description) {
    Description["ALARM_CODE"] = "\uC54C\uB78C \uCF54\uB4DC";
    Description["ALARM_DETAIL"] = "\uC54C\uB78C \uC0C1\uC138";
    Description["OPERATION_NAME"] = "\uC791\uC5C5 \uC774\uB984";
    Description["DESCRIPTION"] = "\uC124\uBA85";
    Description["LIST"] = "\uC54C\uB78C \uB9AC\uC2A4\uD2B8";
    Description["ALARM_STATE"] = "\uC54C\uB78C \uC0C1\uD0DC. \uB2E8\uBC1C\uC801\uC778 \uC54C\uB78C\uC758 \uACBD\uC6B0 SET \uAC12\uC744, \uC54C\uB78C \uBC1C\uC0DD/\uD574\uC81C\uAC00 \uC874\uC7AC\uD558\uB294 \uACBD\uC6B0 START/END \uAC12\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.";
    Description["ALARM_TIME"] = "\uC54C\uB78C \uBC1C\uC0DD \uC2DC\uAC04";
    Description["DATE_FROM"] = "\uC54C\uB78C \uC2DC\uC791 \uB0A0\uC9DC. \uD615\uC2DD\uC740 yyyy-mm-dd hh:mm:ss\uD615\uC2DD\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.";
    Description["DATE_TO"] = "\uC54C\uB78C \uC885\uB8CC \uB0A0\uC9DC. \uD615\uC2DD\uC740 yyyy-mm-dd hh:mm:ss\uD615\uC2DD\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.";
})(Description || (Description = {}));
class SEMAlarmActive {
}
exports.SEMAlarmActive = SEMAlarmActive;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SEMAlarmActive.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_STATE,
        example: 'SET',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SEMAlarmActive.prototype, "state", void 0);
class SEMAlarm {
}
exports.SEMAlarm = SEMAlarm;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], SEMAlarm.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_DETAIL,
        example: '',
        required: false,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SEMAlarm.prototype, "detail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.OPERATION_NAME,
        example: 'PROGRAM_START_FAIL',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SEMAlarm.prototype, "operationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DESCRIPTION,
        example: '프로그램 시작을 실패했습니다.',
        required: false,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SEMAlarm.prototype, "description", void 0);
class SEMAlarmLog extends SEMAlarm {
}
exports.SEMAlarmLog = SEMAlarmLog;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_STATE,
        example: 'SET',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SEMAlarmLog.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_TIME,
        example: '2021-01-01 00:00:00',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SEMAlarmLog.prototype, "createAt", void 0);
class SEMAlamrListRequestDto extends pagination_1.PaginationRequest {
}
exports.SEMAlamrListRequestDto = SEMAlamrListRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], SEMAlamrListRequestDto.prototype, "code", void 0);
class SEMAlarmListResponseDto extends pagination_1.PaginationResponse {
}
exports.SEMAlarmListResponseDto = SEMAlarmListResponseDto;
class DeleteAlarmDefineRequestDto {
}
exports.DeleteAlarmDefineRequestDto = DeleteAlarmDefineRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DeleteAlarmDefineRequestDto.prototype, "code", void 0);
class PostSEMAlarmRequestDto {
}
exports.PostSEMAlarmRequestDto = PostSEMAlarmRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PostSEMAlarmRequestDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_STATE,
        example: 'START',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], PostSEMAlarmRequestDto.prototype, "state", void 0);
class SEMAlarmLogListRequestDto extends pagination_1.PaginationRequest {
}
exports.SEMAlarmLogListRequestDto = SEMAlarmLogListRequestDto;
class SEMAlarmLogResponseDto extends pagination_1.PaginationResponse {
}
exports.SEMAlarmLogResponseDto = SEMAlarmLogResponseDto;
class SEMAlarmActiveResponseDto {
}
exports.SEMAlarmActiveResponseDto = SEMAlarmActiveResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.LIST,
        example: [
            {
                code: '2000',
                state: 'START',
            },
        ],
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SEMAlarmActiveResponseDto.prototype, "list", void 0);
class DeleteSEMAlarmRequestDto {
}
exports.DeleteSEMAlarmRequestDto = DeleteSEMAlarmRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DeleteSEMAlarmRequestDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DATE_FROM,
        example: '2025-01-01 00:00:00',
        required: false,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], DeleteSEMAlarmRequestDto.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DATE_TO,
        example: '2025-12-31 23:59:59',
        required: false,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], DeleteSEMAlarmRequestDto.prototype, "dateTo", void 0);
class SaveSEMAlarmLogRequestDto {
}
exports.SaveSEMAlarmLogRequestDto = SaveSEMAlarmLogRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveSEMAlarmLogRequestDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_STATE,
        example: 'SET',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SaveSEMAlarmLogRequestDto.prototype, "state", void 0);
class SaveSEMAlarmLogResponseDto extends SaveSEMAlarmLogRequestDto {
}
exports.SaveSEMAlarmLogResponseDto = SaveSEMAlarmLogResponseDto;
class SEMGeneralLogRequestDto {
}
exports.SEMGeneralLogRequestDto = SEMGeneralLogRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '일반LOG를 읽어올 시작 날짜를 입력해주세요. 날짜의 형식은 yyyy-mm-dd hh:mm:ss형식으로 입력해주세요.',
        example: '2025-01-01 00:00:00',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SEMGeneralLogRequestDto.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '일반LOG를 읽어올 종료 날짜를 입력해주세요. 날짜의 형식은 yyyy-mm-dd hh:mm:ss형식으로 입력해주세요.',
        example: '2025-12-31 23:59:59',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SEMGeneralLogRequestDto.prototype, "dateFrom", void 0);
