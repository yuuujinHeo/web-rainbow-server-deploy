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
exports.InitResponseDto = exports.InitRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const util_1 = require("../../../util");
var Description;
(function (Description) {
    Description["ROBOT_SERIAL"] = "\uB85C\uBD07 \uC2DC\uB9AC\uC5BC \uBC88\uD638";
    Description["ROBOT_NAME"] = "\uB85C\uBD07 \uC774\uB984. \uB85C\uBD07 \uC774\uB984\uC740 FRS\uC5D0\uC11C \uC0DD\uC131\uD558\uC5EC \uBC18\uD658\uD569\uB2C8\uB2E4.";
})(Description || (Description = {}));
class InitRequestDto {
}
exports.InitRequestDto = InitRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ROBOT_SERIAL,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], InitRequestDto.prototype, "robotSerial", void 0);
class InitResponseDto extends InitRequestDto {
}
exports.InitResponseDto = InitResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ROBOT_NAME,
        example: 'TESTBOT',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], InitResponseDto.prototype, "robotName", void 0);
