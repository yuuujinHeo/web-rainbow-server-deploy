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
exports.DeleteCodeResponseDto = exports.UpdateCodeResponseDto = exports.CreateCodeResponseDto = exports.CodeListResponseDto = exports.CodeDataDto = exports.CodeResponseDto = exports.ReadCodeDto = exports.UpdateCodeDto = exports.CreateCodeDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateCodeDto {
}
exports.CreateCodeDto = CreateCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '코드 아이디',
        example: 'USER_STATUS',
    }),
    (0, class_validator_1.IsString)({ message: 'codeId는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'codeId is required' }),
    __metadata("design:type", String)
], CreateCodeDto.prototype, "codeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '코드 값',
        example: 'ACTIVE',
    }),
    (0, class_validator_1.IsString)({ message: 'code는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'code is required' }),
    __metadata("design:type", String)
], CreateCodeDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '코드 명',
        example: '활성',
    }),
    (0, class_validator_1.IsString)({ message: 'codeName은 문자열이어야 합니다.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'codeName is required' }),
    __metadata("design:type", String)
], CreateCodeDto.prototype, "codeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '코드 설명',
        example: '활성 상태를 나타내는 코드',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'codeDesc는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCodeDto.prototype, "codeDesc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '상위 코드',
        example: 'STATUS',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'parentCode는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCodeDto.prototype, "parentCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '정렬 순서',
        example: 1,
        required: false,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'sortOrder는 숫자여야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], CreateCodeDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '사용 여부 (Y: 사용, N: 미사용)',
        example: 'Y',
        default: 'Y',
        enum: ['Y', 'N'],
        required: true,
    }),
    (0, class_validator_1.IsString)({ message: 'useYn은 문자열이어야 합니다.' }),
    (0, class_validator_1.IsIn)(['Y', 'N'], {
        message: 'useYn은 Y 또는 N이어야 합니다.',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCodeDto.prototype, "useYn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '생성자 아이디',
        example: 'admin',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'createdBy는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCodeDto.prototype, "createdBy", void 0);
class UpdateCodeDto {
}
exports.UpdateCodeDto = UpdateCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '코드 값',
        example: 'INACTIVE',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'code는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], UpdateCodeDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '코드 명',
        example: '비활성',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'codeName은 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], UpdateCodeDto.prototype, "codeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '코드 설명',
        example: '비활성 상태를 나타내는 코드',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'codeDesc는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], UpdateCodeDto.prototype, "codeDesc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '상위 코드',
        example: 'STATUS',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'parentCode는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], UpdateCodeDto.prototype, "parentCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '정렬 순서',
        example: 2,
        required: false,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'sortOrder는 숫자여야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], UpdateCodeDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '사용 여부 (Y: 사용, N: 미사용)',
        example: 'N',
        enum: ['Y', 'N'],
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'useYn은 문자열이어야 합니다.' }),
    (0, class_validator_1.IsIn)(['Y', 'N'], {
        message: 'useYn은 Y 또는 N이어야 합니다.',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCodeDto.prototype, "useYn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '수정자',
        example: 'admin',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'updatedBy는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], UpdateCodeDto.prototype, "updatedBy", void 0);
class ReadCodeDto {
}
exports.ReadCodeDto = ReadCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '코드 아이디',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'codeId는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "codeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '코드 값',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'code는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '코드 명',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'codeName은 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "codeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '코드 설명',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'codeDesc는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "codeDesc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '상위 코드',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'parentCode는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "parentCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '정렬 순서',
        required: false,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'sortOrder는 숫자여야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], ReadCodeDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '사용 여부',
        enum: ['Y', 'N'],
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'useYn은 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "useYn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '페이지 번호 (1부터 시작)',
        example: 1,
        minimum: 1,
        required: false,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'pageNo는 숫자여야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], ReadCodeDto.prototype, "pageNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '페이지 크기',
        example: 10,
        minimum: 1,
        maximum: 100,
        required: false,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'pageSize는 숫자여야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], ReadCodeDto.prototype, "pageSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '검색 타입',
        enum: ['codeId', 'code', 'codeName', 'codeDesc'],
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'searchType은 문자열이어야 합니다.' }),
    (0, class_validator_1.IsIn)(['codeId', 'code', 'codeName', 'codeDesc'], {
        message: 'searchType은 codeId, code, codeName, codeDesc 중 하나여야 합니다.',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "searchType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '검색 텍스트',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'searchText는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "searchText", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '생성일자',
        required: false,
    }),
    (0, class_validator_1.IsDateString)({}, { message: 'createdAt은 유효한 ISO 8601 형식이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '생성일자 시작 범위',
        required: false,
    }),
    (0, class_validator_1.IsDateString)({}, { message: 'createdAtStart는 유효한 ISO 8601 형식이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "createdAtStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '생성일자 종료 범위',
        required: false,
    }),
    (0, class_validator_1.IsDateString)({}, { message: 'createdAtEnd는 유효한 ISO 8601 형식이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "createdAtEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '수정일자',
        required: false,
    }),
    (0, class_validator_1.IsDateString)({}, { message: 'updatedAt은 유효한 ISO 8601 형식이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '수정일자 시작 범위',
        required: false,
    }),
    (0, class_validator_1.IsDateString)({}, { message: 'updatedAtStart는 유효한 ISO 8601 형식이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "updatedAtStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '수정일자 종료 범위',
        required: false,
    }),
    (0, class_validator_1.IsDateString)({}, { message: 'updatedAtEnd는 유효한 ISO 8601 형식이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "updatedAtEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '생성자',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'createdBy는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '수정자',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'updatedBy는 문자열이어야 합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], ReadCodeDto.prototype, "updatedBy", void 0);
class CodeResponseDto {
}
exports.CodeResponseDto = CodeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 아이디', example: 'USER_STATUS', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeResponseDto.prototype, "codeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 값', example: 'ACTIVE', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 명', example: '활성', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeResponseDto.prototype, "codeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 설명', example: '활성 상태를 나타내는 코드', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeResponseDto.prototype, "codeDesc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '상위 코드', example: 'STATUS', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeResponseDto.prototype, "parentCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '정렬 순서', example: 1, required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CodeResponseDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용 여부', example: 'Y', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeResponseDto.prototype, "useYn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성일시', example: '2025-08-12T15:30:00.000Z', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정일시', example: '2025-08-12T15:30:00.000Z', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성자', example: 'admin', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeResponseDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정자', example: 'admin', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeResponseDto.prototype, "updatedBy", void 0);
class CodeDataDto {
}
exports.CodeDataDto = CodeDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 아이디', example: 'USER_STATUS' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeDataDto.prototype, "codeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 값', example: 'ACTIVE' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeDataDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 명', example: '활성' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeDataDto.prototype, "codeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 설명', example: '활성 상태를 나타내는 코드' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeDataDto.prototype, "codeDesc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '상위 코드', example: 'STATUS' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeDataDto.prototype, "parentCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '정렬 순서', example: 1 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CodeDataDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용 여부', example: 'Y' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeDataDto.prototype, "useYn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성일시', example: '2025-08-12T15:30:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeDataDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정일시', example: '2025-08-12T15:30:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeDataDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성자', example: 'admin' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeDataDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정자', example: 'admin' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeDataDto.prototype, "updatedBy", void 0);
class CodeListResponseDto {
}
exports.CodeListResponseDto = CodeListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '페이지 번호', example: 1 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CodeListResponseDto.prototype, "pageNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '페이지 크기', example: 10 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CodeListResponseDto.prototype, "pageSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '전체 개수', example: 25 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CodeListResponseDto.prototype, "totalCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '전체 페이지 수', example: 3 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CodeListResponseDto.prototype, "totalPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '검색 타입', example: 'codeName', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeListResponseDto.prototype, "searchType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '검색 텍스트', example: '활성', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeListResponseDto.prototype, "searchText", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '검색 시작일', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeListResponseDto.prototype, "createdAtStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '검색 종료일', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeListResponseDto.prototype, "createdAtEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '업데이트 검색 시작일', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeListResponseDto.prototype, "updatedAtStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '업데이트 검색 종료일', required: false }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CodeListResponseDto.prototype, "updatedAtEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 목록', type: [CodeDataDto] }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], CodeListResponseDto.prototype, "data", void 0);
class CreateCodeResponseDto {
}
exports.CreateCodeResponseDto = CreateCodeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 아이디', example: 'USER_STATUS' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateCodeResponseDto.prototype, "codeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 값', example: 'ACTIVE' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateCodeResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 명', example: '활성' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateCodeResponseDto.prototype, "codeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 설명', example: '활성 상태를 나타내는 코드' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateCodeResponseDto.prototype, "codeDesc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '상위 코드', example: 'STATUS' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateCodeResponseDto.prototype, "parentCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '정렬 순서', example: 1 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CreateCodeResponseDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용 여부', example: 'Y' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateCodeResponseDto.prototype, "useYn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성일시', example: '2025-08-12T15:30:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateCodeResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성자', example: 'admin' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateCodeResponseDto.prototype, "createdBy", void 0);
class UpdateCodeResponseDto {
}
exports.UpdateCodeResponseDto = UpdateCodeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 아이디', example: 'USER_STATUS' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UpdateCodeResponseDto.prototype, "codeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 값', example: 'INACTIVE' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UpdateCodeResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 명', example: '비활성' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UpdateCodeResponseDto.prototype, "codeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 설명', example: '비활성 상태를 나타내는 코드' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UpdateCodeResponseDto.prototype, "codeDesc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '상위 코드', example: 'STATUS' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UpdateCodeResponseDto.prototype, "parentCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '정렬 순서', example: 2 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UpdateCodeResponseDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용 여부', example: 'N' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UpdateCodeResponseDto.prototype, "useYn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정일시', example: '2025-08-12T15:30:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UpdateCodeResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정자', example: 'admin' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UpdateCodeResponseDto.prototype, "updatedBy", void 0);
class DeleteCodeResponseDto {
}
exports.DeleteCodeResponseDto = DeleteCodeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 아이디', example: 'USER_STATUS' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DeleteCodeResponseDto.prototype, "codeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 값', example: 'ACTIVE' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DeleteCodeResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 명', example: '활성' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DeleteCodeResponseDto.prototype, "codeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '코드 설명', example: '활성 상태를 나타내는 코드' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DeleteCodeResponseDto.prototype, "codeDesc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '상위 코드', example: 'STATUS' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DeleteCodeResponseDto.prototype, "parentCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '정렬 순서', example: 1 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], DeleteCodeResponseDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용 여부', example: 'Y' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DeleteCodeResponseDto.prototype, "useYn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성일시', example: '2025-08-12T15:30:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DeleteCodeResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정일시', example: '2025-08-12T15:30:00.000Z' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DeleteCodeResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성자', example: 'admin' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DeleteCodeResponseDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정자', example: 'admin' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DeleteCodeResponseDto.prototype, "updatedBy", void 0);
