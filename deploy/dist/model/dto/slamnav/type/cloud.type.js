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
exports.MappingCloudDto = exports.LidarCloudDto = exports.CloudDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const movestatus_type_1 = require("./movestatus.type");
const util_1 = require("../../../../util");
var Description;
(function (Description) {
    Description["CLOUD_XYZ"] = "\uB77C\uC774\uB2E4 \uD074\uB77C\uC6B0\uB4DC\uC758 \uB85C\uBD07\uAE30\uC900 \uC88C\uD45C";
    Description["CLOUD_LIDAR"] = "\uD604\uC7AC \uB77C\uC774\uB2E4 \uB370\uC774\uD130 \uBC30\uC5F4";
    Description["STATUS_POSE"] = "\uB85C\uBD07 \uAE00\uB85C\uBC8C\uC88C\uD45C. \uC704\uCE58\uCD08\uAE30\uD654\uAC00 good\uC778 \uC0C1\uD0DC\uC77C\uB54C \uC720\uC758\uBBF8";
    Description["TIME"] = "\uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uC2DC\uAC04. ms \uB2E8\uC704";
    Description["CLOUD_MAPPING"] = "\uB9F5 \uC0DD\uC131 \uC911 \uB204\uC801\uB418\uB294 \uB77C\uC774\uB2E4 \uB370\uC774\uD130 \uBC30\uC5F4(\uB204\uC801\uB41C \uC804\uCCB4 \uBC30\uC5F4\uC774 \uC544\uB2D8)";
})(Description || (Description = {}));
class CloudDto {
}
exports.CloudDto = CloudDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CloudDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CloudDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CloudDto.prototype, "z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CloudDto.prototype, "intensity", void 0);
class LidarCloudDto {
}
exports.LidarCloudDto = LidarCloudDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_LIDAR,
        example: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", Array)
], LidarCloudDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.STATUS_POSE, required: true }),
    __metadata("design:type", movestatus_type_1.PoseStatusDto)
], LidarCloudDto.prototype, "pose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TIME,
        example: util_1.DateUtil.getTimeString(),
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LidarCloudDto.prototype, "time", void 0);
class MappingCloudDto {
}
exports.MappingCloudDto = MappingCloudDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_MAPPING,
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
], MappingCloudDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TIME,
        example: util_1.DateUtil.getTimeString(),
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingCloudDto.prototype, "time", void 0);
