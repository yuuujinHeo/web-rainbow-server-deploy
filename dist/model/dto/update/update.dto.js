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
exports.ResponseWebUIAppDeleteDto = exports.ResponseWebUIAppAddDto = exports.WebUIAppDeleteDto = exports.WebUIAppAddDto = exports.UpdateResponseSocketDto = exports.UpdateRequestSocketDto = exports.UpdateRequestDto = exports.ResponseReleaseVersionInfoDto = exports.GetReleaseAppsVersionListRequestDto = exports.GetReleaseAppBranchesResponseDto = exports.ResponseReleaseAppsBranches = exports.GetReleaseAppsBranchesRequestDto = exports.CommitDto = exports.GetSoftwareParamDto = void 0;
const pagination_1 = require("../../../pagination");
const util_1 = require("../../../util");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var Description;
(function (Description) {
    Description["SOFTWARE"] = "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC885\uB958 (\uC608: rrs, slamnav2)";
    Description["BRANCH"] = "\uBE0C\uB79C\uCE58 \uC774\uB984";
    Description["TOKEN"] = "\uC554\uD638\uD654\uB41C token";
    Description["ID"] = "\uC694\uCCAD\uC5D0 \uB300\uD55C ID \uAC12. \uC11C\uBC84\uC5D0\uC11C \uC790\uB3D9\uC0DD\uC131\uB418\uBA70 \uC751\uB2F5\uC5D0 \uB3D9\uC77C\uD55C ID \uAC12 \uBC18\uD658 \uD544\uC694.";
    Description["VERSION"] = "version \uC815\uBCF4";
    Description["RESULT"] = "\uC5C5\uB370\uC774\uD2B8 \uACB0\uACFC";
    Description["MESSAGE"] = "\uC5C5\uB370\uC774\uD2B8 \uBA54\uC2DC\uC9C0";
})(Description || (Description = {}));
class GetSoftwareParamDto {
}
exports.GetSoftwareParamDto = GetSoftwareParamDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '소프트웨어 종류 (예: rrs, slamnav2)',
        example: 'slamnav2',
    }),
    __metadata("design:type", String)
], GetSoftwareParamDto.prototype, "software", void 0);
class CommitDto {
}
exports.CommitDto = CommitDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'commit sha',
        example: 'ae601391564b381ee8d2271e9b4b79a632894016',
    }),
    __metadata("design:type", String)
], CommitDto.prototype, "sha", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'commit url',
        example: 'https://github.com/rainbow-mobile/rainbow-release-apps/commit/ae601391564b381ee8d2271e9b4b79a632894016',
    }),
    __metadata("design:type", String)
], CommitDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'commit name',
    }),
    __metadata("design:type", String)
], CommitDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'commit protected',
    }),
    __metadata("design:type", Boolean)
], CommitDto.prototype, "protected", void 0);
class GetReleaseAppsBranchesRequestDto extends pagination_1.PaginationRequest {
}
exports.GetReleaseAppsBranchesRequestDto = GetReleaseAppsBranchesRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.TOKEN,
        default: '3bJyXEJA/FvAYWnbAIsj6T96+217WeqR4HpdmuNTGcG/dzYaOLjjWkz3bjR1NGYQqj8nMS8A6N91bnaCTveF0Q==',
    }),
    __metadata("design:type", String)
], GetReleaseAppsBranchesRequestDto.prototype, "token", void 0);
class ResponseReleaseAppsBranches {
}
exports.ResponseReleaseAppsBranches = ResponseReleaseAppsBranches;
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'commit',
        type: CommitDto,
    }),
    __metadata("design:type", CommitDto)
], ResponseReleaseAppsBranches.prototype, "commit", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
    }),
    __metadata("design:type", String)
], ResponseReleaseAppsBranches.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
    }),
    __metadata("design:type", Boolean)
], ResponseReleaseAppsBranches.prototype, "protected", void 0);
class GetReleaseAppBranchesResponseDto extends pagination_1.PaginationResponse {
}
exports.GetReleaseAppBranchesResponseDto = GetReleaseAppBranchesResponseDto;
class GetReleaseAppsVersionListRequestDto {
}
exports.GetReleaseAppsVersionListRequestDto = GetReleaseAppsVersionListRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.TOKEN,
        default: '3bJyXEJA/FvAYWnbAIsj6T96+217WeqR4HpdmuNTGcG/dzYaOLjjWkz3bjR1NGYQqj8nMS8A6N91bnaCTveF0Q==',
    }),
    __metadata("design:type", String)
], GetReleaseAppsVersionListRequestDto.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
        example: 'main',
    }),
    __metadata("design:type", String)
], GetReleaseAppsVersionListRequestDto.prototype, "branch", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.SOFTWARE,
        example: 'slamnav2',
    }),
    __metadata("design:type", String)
], GetReleaseAppsVersionListRequestDto.prototype, "software", void 0);
class ResponseReleaseVersionInfoDto {
}
exports.ResponseReleaseVersionInfoDto = ResponseReleaseVersionInfoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
    }),
    __metadata("design:type", String)
], ResponseReleaseVersionInfoDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version path',
    }),
    __metadata("design:type", String)
], ResponseReleaseVersionInfoDto.prototype, "path", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version sha',
    }),
    __metadata("design:type", String)
], ResponseReleaseVersionInfoDto.prototype, "sha", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version size',
    }),
    __metadata("design:type", Number)
], ResponseReleaseVersionInfoDto.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version url',
    }),
    __metadata("design:type", String)
], ResponseReleaseVersionInfoDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version download url',
    }),
    __metadata("design:type", String)
], ResponseReleaseVersionInfoDto.prototype, "download_url", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version links',
    }),
    __metadata("design:type", Object)
], ResponseReleaseVersionInfoDto.prototype, "_links", void 0);
class UpdateRequestDto {
}
exports.UpdateRequestDto = UpdateRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.SOFTWARE,
        example: 'slamnav2',
    }),
    __metadata("design:type", String)
], UpdateRequestDto.prototype, "software", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
        example: 'main',
    }),
    __metadata("design:type", String)
], UpdateRequestDto.prototype, "branch", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.VERSION,
        example: '1.0.0',
    }),
    __metadata("design:type", String)
], UpdateRequestDto.prototype, "version", void 0);
class UpdateRequestSocketDto extends UpdateRequestDto {
}
exports.UpdateRequestSocketDto = UpdateRequestSocketDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
    }),
    __metadata("design:type", String)
], UpdateRequestSocketDto.prototype, "id", void 0);
class UpdateResponseSocketDto extends UpdateRequestSocketDto {
}
exports.UpdateResponseSocketDto = UpdateResponseSocketDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.RESULT,
        example: 'true',
    }),
    __metadata("design:type", String)
], UpdateResponseSocketDto.prototype, "result", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.MESSAGE,
        example: '업데이트 완료',
    }),
    __metadata("design:type", String)
], UpdateResponseSocketDto.prototype, "message", void 0);
class WebUIAppAddDto {
}
exports.WebUIAppAddDto = WebUIAppAddDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '앱 이름 배열',
        example: ['app1', 'app2'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], WebUIAppAddDto.prototype, "appNames", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '브랜치 이름',
        example: 'main',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WebUIAppAddDto.prototype, "branch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로봇 UI에 노출할 첫페이지 URL',
        example: '/S100',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WebUIAppAddDto.prototype, "fo", void 0);
class WebUIAppDeleteDto {
}
exports.WebUIAppDeleteDto = WebUIAppDeleteDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '앱 이름 배열',
        example: ['app1', 'app2'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], WebUIAppDeleteDto.prototype, "appNames", void 0);
class ResponseWebUIAppAddDto {
}
exports.ResponseWebUIAppAddDto = ResponseWebUIAppAddDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '추가한 앱 이름 배열',
        example: ['app1', 'app2'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], ResponseWebUIAppAddDto.prototype, "appNames", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '브랜치 이름',
        example: 'main',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResponseWebUIAppAddDto.prototype, "branch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로봇 UI에 노출할 첫페이지 URL',
        example: '/S100',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResponseWebUIAppAddDto.prototype, "fo", void 0);
class ResponseWebUIAppDeleteDto {
}
exports.ResponseWebUIAppDeleteDto = ResponseWebUIAppDeleteDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '삭제한 앱 이름 배열',
        example: ['app1', 'app2'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], ResponseWebUIAppDeleteDto.prototype, "appNames", void 0);
