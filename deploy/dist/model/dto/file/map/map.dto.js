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
exports.UploadMapRequestDto = exports.DownloadMapRequestDto = exports.SaveTopologyResponseDto = exports.SaveTopologyRequestDto = exports.GetTopologyResponseDto = exports.GetTopologyRequestDto = exports.SaveCloudPipeResponseDto = exports.SaveCloudPipeRequestDto = exports.SaveCloudResponseDto = exports.SaveCloudRequestDto = exports.GetCloudResponseDto = exports.GetCloudRequestDto = exports.FileDto = exports.GetMapListResponseDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const map_type_1 = require("./type/map.type");
const pagination_1 = require("../../../../pagination");
const topo_type_1 = require("./type/topo.type");
var Description;
(function (Description) {
    Description["MAPNAME"] = "\uB9F5 \uC774\uB984";
    Description["UPDATE_DT"] = "\uB9F5 \uC5C5\uB370\uC774\uD130 \uC2DC\uAC04";
    Description["CLOUD"] = "\uB9F5 \uD074\uB77C\uC6B0\uB4DC \uB370\uC774\uD130. \uAC01 \uC904\uC5D0\uB294 4\uAC1C\uC758 \uAC12\uC774 \uC874\uC7AC\uD558\uBA70 \uC21C\uC11C\uB300\uB85C x, y, z, intensity \uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\n  x, y, z \uB294 \uB178\uB4DC\uC758 \uC704\uCE58\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4. intensity \uB294 \uB178\uB4DC\uC758 \uBC00\uB3C4\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.";
    Description["TOPOLOGY"] = "\uB9F5 \uD1A0\uD3F4\uB85C\uC9C0 \uB370\uC774\uD130";
    Description["FILE"] = "\uD30C\uC77C \uC774\uB984";
    Description["TOPO"] = "\uD1A0\uD3F4\uB85C\uC9C0 \uB370\uC774\uD130";
    Description["DOWNLOAD_FILE"] = "\uB2E4\uC6B4\uB85C\uB4DC\uD560 \uB9F5\uC758 \uC774\uB984\uC744 FRS\uC5D0 \uC800\uC7A5\uB41C fileDetailFlNm \uD615\uD0DC\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.";
    Description["DOWNLOAD_NEW_FILE"] = "FRS\uB85C\uBD80\uD130 \uB2E4\uC6B4\uB85C\uB4DC\uD55C \uB9F5\uC758 \uC774\uB984\uC744 \uBCC0\uACBD\uD574\uC11C \uC800\uC7A5\uD558\uB824\uBA74 \uC785\uB825\uD558\uC138\uC694.";
    Description["IS_FORCE"] = "\uD30C\uC77C\uC744 \uAC15\uC81C\uB85C \uB36E\uC5B4\uC50C\uC6B8 \uC9C0 \uC5EC\uBD80. \uAE30\uC874 \uB3D9\uC77C\uD55C \uB9F5\uC774 \uC874\uC7AC\uD558\uBA74 \uB36E\uC5B4\uC50C\uC6B0\uAC70\uB098 \uC5D0\uB7EC\uB97C \uBC1C\uC0DD\uC2DC\uD0B5\uB2C8\uB2E4.";
    Description["UPLOAD_FILE"] = "\uC5C5\uB85C\uB4DC\uD560 \uD30C\uC77C \uC774\uB984";
    Description["UPLOAD_NEW_FILE"] = "\uC5C5\uB85C\uB4DC\uD560 \uB9F5\uC758 \uC774\uB984\uC744 \uBCC0\uACBD\uD574\uC11C \uC800\uC7A5\uD558\uB824\uBA74 \uC785\uB825\uD558\uC138\uC694.";
})(Description || (Description = {}));
class GetMapListResponseDto {
}
exports.GetMapListResponseDto = GetMapListResponseDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ description: '맵 목록', type: [map_type_1.MapDto] }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], GetMapListResponseDto.prototype, "list", void 0);
class FileDto {
}
exports.FileDto = FileDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MAPNAME,
        example: 'Test',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], FileDto.prototype, "mapName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.FILE,
        example: 'cloud.csv',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], FileDto.prototype, "fileName", void 0);
class GetCloudRequestDto extends FileDto {
}
exports.GetCloudRequestDto = GetCloudRequestDto;
class GetCloudResponseDto extends GetCloudRequestDto {
}
exports.GetCloudResponseDto = GetCloudResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD,
        example: [
            ['1.394410', '1.240310', '0.000000', '44.000000'],
            ['1.407336', '1.244450', '0.000000', '48.000000'],
            ['3.278415', '2.045071', '0.000000', '30.000000'],
            ['3.263314', '1.578665', '0.000000', '54.000000'],
        ],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GetCloudResponseDto.prototype, "cloud", void 0);
class SaveCloudRequestDto extends FileDto {
}
exports.SaveCloudRequestDto = SaveCloudRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD,
        example: [
            ['1.394410', '1.240310', '0.000000', '44.000000'],
            ['1.407336', '1.244450', '0.000000', '48.000000'],
            ['3.278415', '2.045071', '0.000000', '30.000000'],
            ['3.263314', '1.578665', '0.000000', '54.000000'],
        ],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SaveCloudRequestDto.prototype, "cloud", void 0);
class SaveCloudResponseDto extends SaveCloudRequestDto {
}
exports.SaveCloudResponseDto = SaveCloudResponseDto;
class SaveCloudPipeRequestDto extends FileDto {
}
exports.SaveCloudPipeRequestDto = SaveCloudPipeRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'gzip 압축된 클라우드 데이터 파일 (.gz)',
        type: 'string',
        format: 'binary',
        example: 'cloud_data.gz',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveCloudPipeRequestDto.prototype, "cloudFile", void 0);
class SaveCloudPipeResponseDto extends FileDto {
}
exports.SaveCloudPipeResponseDto = SaveCloudPipeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '파일 저장 성공 여부', example: true }),
    __metadata("design:type", Boolean)
], SaveCloudPipeResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '저장된 파일 경로', example: '/uploads/cloud_data.gz' }),
    __metadata("design:type", String)
], SaveCloudPipeResponseDto.prototype, "filePath", void 0);
class GetTopologyRequestDto extends pagination_1.PaginationRequest {
}
exports.GetTopologyRequestDto = GetTopologyRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.MAPNAME, example: 'Small' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GetTopologyRequestDto.prototype, "mapName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.FILE, example: 'topo.json' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GetTopologyRequestDto.prototype, "fileName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '',
        required: false,
        description: '노드 타입',
    }),
    __metadata("design:type", String)
], GetTopologyRequestDto.prototype, "nodeType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '',
        required: false,
        description: '검색단어',
    }),
    __metadata("design:type", String)
], GetTopologyRequestDto.prototype, "searchText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'id',
        required: false,
        description: '정렬옵션',
    }),
    __metadata("design:type", String)
], GetTopologyRequestDto.prototype, "sortOption", void 0);
class GetTopologyResponseDto extends FileDto {
}
exports.GetTopologyResponseDto = GetTopologyResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.TOPO, type: [topo_type_1.NodeDto], required: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GetTopologyResponseDto.prototype, "data", void 0);
class SaveTopologyRequestDto extends FileDto {
}
exports.SaveTopologyRequestDto = SaveTopologyRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.TOPO, type: [topo_type_1.NodeDto], required: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SaveTopologyRequestDto.prototype, "data", void 0);
class SaveTopologyResponseDto extends SaveTopologyRequestDto {
}
exports.SaveTopologyResponseDto = SaveTopologyResponseDto;
class DownloadMapRequestDto {
}
exports.DownloadMapRequestDto = DownloadMapRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.DOWNLOAD_FILE, example: 'Small.zip' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], DownloadMapRequestDto.prototype, "fileName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.DOWNLOAD_NEW_FILE, example: 'Small' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], DownloadMapRequestDto.prototype, "newMapName", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true),
    (0, swagger_1.ApiProperty)({
        description: Description.IS_FORCE,
        example: false,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DownloadMapRequestDto.prototype, "isForce", void 0);
class UploadMapRequestDto {
}
exports.UploadMapRequestDto = UploadMapRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.UPLOAD_FILE, example: 'Small' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], UploadMapRequestDto.prototype, "mapName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.UPLOAD_NEW_FILE, example: 'Small' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], UploadMapRequestDto.prototype, "newMapName", void 0);
