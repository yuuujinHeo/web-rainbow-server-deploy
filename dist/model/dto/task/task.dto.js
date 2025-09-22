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
exports.TaskResponseTaskman = exports.TaskRequestTaskman = exports.TaskResponseDto = exports.TaskRequestDto = void 0;
const url_util_1 = require("../../../util/url.util");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const task_type_1 = require("./type/task.type");
var Description;
(function (Description) {
    Description["COMMAND"] = "\uD0DC\uC2A4\uD06C \uBA85\uB839. \uC218\uD589\uD560 \uD0DC\uC2A4\uD06C \uBA85\uB839\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["MAPNAME"] = "\uB9F5 \uC774\uB984. \uD0DC\uC2A4\uD06C \uC791\uC5C5\uC744 \uC9C4\uD589\uD560 \uACBD\uC6B0, \uD574\uB2F9 \uD0DC\uC2A4\uD06C \uD30C\uC77C\uC774 \uC788\uB294 \uB9F5 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uD0DC\uC2A4\uD06C \uD30C\uC77C\uC740 \uB9F5 \uD3F4\uB354\uC5D0 \uC885\uC18D\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.";
    Description["TASKNAME"] = "\uD0DC\uC2A4\uD06C \uC774\uB984. \uD0DC\uC2A4\uD06C \uD30C\uC77C\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["ID"] = "\uC694\uCCAD\uC758 ID\uAC12. \uC694\uCCAD\uC5D0 \uB300\uD55C \uC751\uB2F5\uC744 \uBC1B\uAE30 \uC704\uD574 \uD544\uC694\uD569\uB2C8\uB2E4. \uC11C\uBC84\uC5D0\uC11C \uC694\uCCAD\uC744 \uBCF4\uB0BC \uB54C \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["RESULT"] = "\uC694\uCCAD\uC5D0 \uB300\uD55C \uACB0\uACFC. \uC694\uCCAD\uC5D0 \uB300\uD55C \uACB0\uACFC\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "\uC694\uCCAD\uC5D0 \uB300\uD55C \uBA54\uC2DC\uC9C0. \uC694\uCCAD\uC5D0 \uB300\uD55C \uBA54\uC2DC\uC9C0\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.";
})(Description || (Description = {}));
class TaskRequestDto {
}
exports.TaskRequestDto = TaskRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: task_type_1.TaskCommand.taskRun,
        enum: task_type_1.TaskCommand,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskRequestDto.prototype, "command", void 0);
class TaskResponseDto extends TaskRequestDto {
}
exports.TaskResponseDto = TaskResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '태스크 이름', example: 'task_001', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseDto.prototype, "taskName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '태스크 상태', example: 'RUNNING', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseDto.prototype, "taskState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '태스크 목록',
        example: ['task_001', 'task_002'],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], TaskResponseDto.prototype, "taskList", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '태스크 데이터', example: {}, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], TaskResponseDto.prototype, "taskData", void 0);
class TaskRequestTaskman extends TaskRequestDto {
}
exports.TaskRequestTaskman = TaskRequestTaskman;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: url_util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskRequestTaskman.prototype, "id", void 0);
class TaskResponseTaskman extends TaskResponseDto {
}
exports.TaskResponseTaskman = TaskResponseTaskman;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: url_util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseTaskman.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.RESULT, example: 'accept', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseTaskman.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.MESSAGE, example: '', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseTaskman.prototype, "message", void 0);
