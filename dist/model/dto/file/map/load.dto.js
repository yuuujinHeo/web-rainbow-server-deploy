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
exports.LoadResponseFrs = exports.LoadResponseSlamnav = exports.LoadResponseDto = exports.LoadRequestDto = exports.MapCommand = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const util_1 = require("../../../../util");
const description_1 = require("../../description");
var Description;
(function (Description) {
    Description["ID"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["COMMAND"] = "\uC2E4\uD589\uD560 \uBA85\uB839";
    Description["MAPNAME"] = "\uB85C\uB4DC(\uC800\uC7A5)\uD560 \uB9F5 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["FILE"] = "\uC800\uC7A5\uD560 \uD30C\uC77C\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uD655\uC7A5\uC790\uB97C \uD3EC\uD568\uD558\uC5EC \uC785\uB825\uD558\uC138\uC694.";
    Description["EXTENSION"] = "\uB85C\uB4DC(\uC800\uC7A5)\uD560 \uD30C\uC77C\uC758 \uD655\uC7A5\uC790\uB97C \uC785\uB825\uD558\uC138\uC694. cloud\uC758 \uACBD\uC6B0 \uD604\uC7AC csv\uB9CC \uC9C0\uC6D0\uD558\uBA70 topology\uB294 \uD604\uC7AC json \uD615\uC2DD\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4.";
    Description["MAPPING_NAME"] = "\uC0C8\uB85C \uC0DD\uC131\uD55C \uB9F5\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["RESULT"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.";
    Description["TIME"] = "\uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uC2DC\uAC04. ms \uB2E8\uC704";
    Description["TOPO"] = "\uC800\uC7A5\uD560 \uD1A0\uD3F4\uB85C\uC9C0 \uD615\uC2DD\uC744 \uB9DE\uCDB0 \uC785\uB825\uD558\uC138\uC694.";
})(Description || (Description = {}));
var MapCommand;
(function (MapCommand) {
    MapCommand["uploadMap"] = "upload";
    MapCommand["downloadMap"] = "download";
    MapCommand["publishMap"] = "publish";
    MapCommand["getMapList"] = "list";
    MapCommand["getCloud"] = "getCloud";
    MapCommand["saveCloud"] = "saveCloud";
    MapCommand["getTopo"] = "getTopo";
    MapCommand["saveTopo"] = "saveTopo";
    MapCommand["loadMap"] = "loadMap";
    MapCommand["loadTopo"] = "loadTopo";
    MapCommand["mappingStart"] = "mappingStart";
    MapCommand["mappingStop"] = "mappingStop";
    MapCommand["mappingSave"] = "mappingSave";
    MapCommand["mappingReload"] = "mappingReload";
})(MapCommand || (exports.MapCommand = MapCommand = {}));
class LoadRequestDto {
}
exports.LoadRequestDto = LoadRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: MapCommand.loadMap,
        enum: MapCommand,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MAPNAME,
        example: 'Large',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadRequestDto.prototype, "mapName", void 0);
class LoadResponseDto extends LoadRequestDto {
}
exports.LoadResponseDto = LoadResponseDto;
class LoadResponseSlamnav extends LoadResponseDto {
}
exports.LoadResponseSlamnav = LoadResponseSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadResponseSlamnav.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MESSAGE,
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadResponseSlamnav.prototype, "message", void 0);
class LoadResponseFrs {
}
exports.LoadResponseFrs = LoadResponseFrs;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: description_1.FrsDescription.ROBOT_SERIAL,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadResponseFrs.prototype, "robotSerial", void 0);
