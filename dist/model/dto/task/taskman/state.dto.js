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
exports.TaskStateDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
var Description;
(function (Description) {
    Description["MAPNAME"] = "\uB9F5 \uC774\uB984";
    Description["TASKNAME"] = "\uD0DC\uC2A4\uD06C \uC774\uB984";
    Description["RUNNING"] = "\uD0DC\uC2A4\uD06C \uC2E4\uD589 \uC0C1\uD0DC";
    Description["TASKID"] = "\uD0DC\uC2A4\uD06C ID";
})(Description || (Description = {}));
class TaskStateDto {
}
exports.TaskStateDto = TaskStateDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], TaskStateDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], TaskStateDto.prototype, "connection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.MAPNAME, example: 'Test' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskStateDto.prototype, "mapName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TASKNAME,
        example: 'moveTest.task',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskStateDto.prototype, "taskName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.RUNNING, example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TaskStateDto.prototype, "running", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.TASKID, example: 1 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], TaskStateDto.prototype, "taskId", void 0);
