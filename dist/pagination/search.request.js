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
exports.SearchRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const pagination_request_1 = require("./pagination.request");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class SearchRequestDto extends pagination_request_1.PaginationRequest {
}
exports.SearchRequestDto = SearchRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '검색컬럼명. 검색하고자 하는 컬럼명을 입력해주세요. 없다면 모든 컬럼을 기준으로 검색합니다.',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "searchType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '검색어. 검색하고자 하는 텍스트를 입력해주세요.',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "searchText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '정렬 옵션. 정렬하고자 하는 컬럼명을 입력해주세요.',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "sortOption", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '정렬 방향. ASC 또는 DESC를 입력해주세요.',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "sortDirection", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '2025-01-01 00:00:00',
        description: '검색 시작 날짜 (YYYY-MM-DD HH:MM:SS)',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "dateFrom", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '2025-12-31 23:59:59',
        description: '검색 종료 날짜 (YYYY-MM-DD HH:MM:SS)',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "dateTo", void 0);
