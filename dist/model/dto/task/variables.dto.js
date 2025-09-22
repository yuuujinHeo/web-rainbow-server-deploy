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
exports.TaskVariablesResponseTaskman = exports.TaskVariablesRequestTaskman = exports.TaskVariablesResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const task_type_1 = require("./type/task.type");
const util_1 = require("../../../util");
const class_transformer_1 = require("class-transformer");
class TaskVariablesResponseDto {
}
exports.TaskVariablesResponseDto = TaskVariablesResponseDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        description: '태스크 변수 리스트',
        type: [task_type_1.TaskVariableDto],
    }),
    __metadata("design:type", Array)
], TaskVariablesResponseDto.prototype, "variables", void 0);
class TaskVariablesRequestTaskman {
}
exports.TaskVariablesRequestTaskman = TaskVariablesRequestTaskman;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'ID',
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskVariablesRequestTaskman.prototype, "id", void 0);
class TaskVariablesResponseTaskman extends TaskVariablesResponseDto {
}
exports.TaskVariablesResponseTaskman = TaskVariablesResponseTaskman;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'ID',
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskVariablesResponseTaskman.prototype, "id", void 0);
