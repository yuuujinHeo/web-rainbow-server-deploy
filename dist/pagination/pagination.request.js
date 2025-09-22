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
exports.PaginationRequest = void 0;
exports.getPaginationOffset = getPaginationOffset;
exports.getPaginationLimit = getPaginationLimit;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class PaginationRequest {
    getOffset() {
        if (this.pageNo === null || this.pageNo === undefined || this.pageNo < 1) {
            this.pageNo = 1;
        }
        if (this.pageSize === null || this.pageSize === undefined || this.pageSize < 1) {
            this.pageSize = 10;
        }
        return (Number(this.pageNo) - 1) * Number(this.pageSize);
    }
    getLimit() {
        if (this.pageSize === null || this.pageSize === undefined || this.pageSize < 1) {
            this.pageSize = 10;
        }
        return Number(this.pageSize);
    }
}
exports.PaginationRequest = PaginationRequest;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: '페이지 번호',
        required: false,
    }),
    __metadata("design:type", Number)
], PaginationRequest.prototype, "pageNo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiProperty)({
        example: '10',
        description: '페이지당 항목 수',
        required: false,
    }),
    __metadata("design:type", Number)
], PaginationRequest.prototype, "pageSize", void 0);
function getPaginationOffset(pageNo, pageSize) {
    if (pageNo === null || pageNo === undefined || pageNo < 1) {
        pageNo = 1;
    }
    if (pageSize === null || pageSize === undefined || pageSize < 1) {
        pageSize = 10;
    }
    return (Number(pageNo) - 1) * Number(pageSize);
}
function getPaginationLimit(pageSize) {
    if (pageSize === null || pageSize === undefined || pageSize < 1) {
        pageSize = 10;
    }
    return Number(pageSize);
}
