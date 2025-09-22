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
exports.TaskFileDto = exports.TaskVariableDto = exports.TaskCommand = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var Description;
(function (Description) {
    Description["MAPNAME"] = "\uB9F5 \uC774\uB984";
    Description["TASKNAME"] = "\uD0DC\uC2A4\uD06C \uC774\uB984";
    Description["VARIABLE_NAME"] = "\uBCC0\uC218 \uC774\uB984";
    Description["VARIABLE_TYPE"] = "\uBCC0\uC218 \uD0C0\uC785";
})(Description || (Description = {}));
var TaskCommand;
(function (TaskCommand) {
    TaskCommand["taskLoad"] = "taskLoad";
    TaskCommand["taskRun"] = "taskRun";
    TaskCommand["taskStop"] = "taskStop";
    TaskCommand["taskSave"] = "taskSave";
    TaskCommand["taskDelete"] = "taskDelete";
})(TaskCommand || (exports.TaskCommand = TaskCommand = {}));
class TaskVariableDto {
}
exports.TaskVariableDto = TaskVariableDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: Description.VARIABLE_NAME,
        example: 'test',
        required: false,
    }),
    __metadata("design:type", String)
], TaskVariableDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: Description.VARIABLE_TYPE,
        example: 'string',
        required: false,
    }),
    __metadata("design:type", String)
], TaskVariableDto.prototype, "type", void 0);
class TaskFileDto {
}
exports.TaskFileDto = TaskFileDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MAPNAME,
        example: 'Test',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskFileDto.prototype, "mapName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TASKNAME,
        example: 'moveTest.task',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskFileDto.prototype, "taskName", void 0);
