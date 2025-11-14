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
exports.PathResponseSlamnav = exports.PathDto = exports.Path = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class Path {
}
exports.Path = Path;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Path 단위노드의 X값',
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], Path.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Path 단위노드의 Y값',
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], Path.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Path 단위노드의 RZ값',
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], Path.prototype, "rz", void 0);
class PathDto {
}
exports.PathDto = PathDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Path 단위노드의 X값',
        example: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", Array)
], PathDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Path 단위노드의 시간값',
        example: '21352345124124',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], PathDto.prototype, "time", void 0);
class PathResponseSlamnav {
}
exports.PathResponseSlamnav = PathResponseSlamnav;
