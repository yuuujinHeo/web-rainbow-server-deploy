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
exports.NodeDto = exports.PoseDto = exports.NodeType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const util_1 = require("../../../../../util");
var Description;
(function (Description) {
    Description["ID"] = "\uB178\uB4DC\uC758 \uACE0\uC720 ID\uAC12\uC785\uB2C8\uB2E4. \uC790\uB3D9\uC0DD\uC131\uB418\uBA70 \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    Description["NAME"] = "\uB178\uB4DC\uC758 \uC774\uB984 \uAC12\uC785\uB2C8\uB2E4. \uAE30\uBCF8 \uC790\uB3D9\uC0DD\uC131\uB418\uBA70 \uBCC0\uACBD \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC911\uBCF5 \uAC80\uC0AC\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
    Description["POSE"] = "\uB178\uB4DC\uC758 \uB9F5 \uC0C1 \uAE00\uB85C\uBC8C \uC88C\uD45C\uAC12\uC785\uB2C8\uB2E4.";
    Description["INFO"] = "\uB178\uB4DC\uC758 \uC815\uBCF4\uAC12 \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uD604\uC7AC \uAD6C\uD604\uB41C \uAE30\uB2A5\uC740 \uC5C6\uC2B5\uB2C8\uB2E4.";
    Description["LINKS"] = "\uB178\uB4DC\uAC00 \uC5F0\uACB0\uB41C \uB2E4\uB978 \uB178\uB4DC\uC758 id\uAC12 \uBC30\uC5F4\uC785\uB2C8\uB2E4. \uD3EC\uD568\uB41C \uB178\uB4DC\uB294 \uD604 \uB178\uB4DC\uC5D0\uC11C \uCD9C\uBC1C\uD558\uB294 \uB2E8\uBC29\uD5A5 \uB9C1\uD06C\uB85C \uC5F0\uACB0\uB418\uC5B4 \uC788\uC73C\uBA70, \uD574\uB2F9 \uB178\uB4DC\uC758 links\uC5D0 \uD604 \uB178\uB4DC\uC758 id\uAC12\uC774 \uD3EC\uD568\uB418\uC5C8\uB2E4\uBA74 \uC591\uBC29\uD5A5 \uB9C1\uD06C\uB85C \uC5F0\uACB0\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.";
    Description["TYPE"] = "\uB178\uB4DC\uC758 \uD0C0\uC785\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.";
})(Description || (Description = {}));
var NodeType;
(function (NodeType) {
    NodeType["route"] = "ROUTE";
    NodeType["goal"] = "GOAL";
    NodeType["init"] = "INIT";
})(NodeType || (exports.NodeType = NodeType = {}));
class PoseDto {
}
exports.PoseDto = PoseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "rx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "ry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "rz", void 0);
class NodeDto {
}
exports.NodeDto = NodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], NodeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.NAME,
        example: 'N_15553',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], NodeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.POSE, required: true }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", PoseDto)
], NodeDto.prototype, "pose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.INFO,
        example: '',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NodeDto.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.LINKS,
        example: ['N_56593', 'N_11448'],
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], NodeDto.prototype, "links", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TYPE,
        example: NodeType.goal,
        enum: NodeType,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], NodeDto.prototype, "type", void 0);
