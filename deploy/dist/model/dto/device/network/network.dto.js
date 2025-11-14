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
exports.ConnectWifiDto = exports.NetworkResponseDto = exports.SetNetworkResponseDto = exports.SetNetworkRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var Description;
(function (Description) {
    Description["DEVICE"] = "\uBCC0\uACBD\uD560 \uB124\uD2B8\uC6CC\uD06C \uB514\uBC14\uC774\uC2A4\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Description["NAME"] = "\uBCC0\uACBD\uD560 \uB124\uD2B8\uC6CC\uD06C\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["DHCP"] = "\uB124\uD2B8\uC6CC\uD06C\uC758 DHCP(\uB3D9\uC801\uD560\uB2F9) \uC0AC\uC6A9\uC5EC\uBD80\uB97C \uC785\uB825\uD558\uC138\uC694. true\uC778 \uACBD\uC6B0 \uC785\uB825\uB41C address \uAC12\uC744 \uBB34\uC2DC\uD558\uACE0 DHCP\uB97C \uCF1C IP\uB97C \uC790\uB3D9\uC73C\uB85C \uD560\uB2F9\uBC1B\uC2B5\uB2C8\uB2E4. false\uC778 \uACBD\uC6B0 address,gateway,mask,dns\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Description["ADDRESS"] = "\uBCC0\uACBD\uD560 IP ADDRESS \uB97C \uC785\uB825\uD558\uC138\uC694. IPv4\uBC84\uC804\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4.";
    Description["GATEWAY"] = "\uBCC0\uACBD\uD560 GATEWAY\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Description["MASK"] = "\uBCC0\uACBD\uD560 \uC11C\uBE0C\uB137\uB9C8\uC2A4\uD06C\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Description["DNS"] = "\uBCC0\uACBD\uD560 DNS\uB97C \uC785\uB825\uD558\uC138\uC694. DNS\uB294 \uBC30\uC5F4\uB85C \uC5EC\uB7EC\uAC1C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.";
})(Description || (Description = {}));
class SetNetworkRequestDto {
}
exports.SetNetworkRequestDto = SetNetworkRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DEVICE,
        example: 'wlp3s0',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetNetworkRequestDto.prototype, "device", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.NAME,
        example: 'mobile_team',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetNetworkRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DHCP,
        example: false,
        required: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], SetNetworkRequestDto.prototype, "dhcp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ADDRESS,
        example: '10.108.1.120',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetNetworkRequestDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GATEWAY,
        example: '10.108.1.1',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetNetworkRequestDto.prototype, "gateway", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.MASK, example: '24' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetNetworkRequestDto.prototype, "mask", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DNS,
        example: ['10.108.1.1'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], SetNetworkRequestDto.prototype, "dns", void 0);
class SetNetworkResponseDto extends SetNetworkRequestDto {
}
exports.SetNetworkResponseDto = SetNetworkResponseDto;
class NetworkResponseDto {
}
exports.NetworkResponseDto = NetworkResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '네트워크 정보', example: 'wifi', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], NetworkResponseDto.prototype, "networkType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '연결 상태', example: true, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], NetworkResponseDto.prototype, "connected", void 0);
class ConnectWifiDto {
}
exports.ConnectWifiDto = ConnectWifiDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '연결할 WIFI의 SSID',
        example: 'mobile_team_5G',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConnectWifiDto.prototype, "ssid", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: '연결할 WIFI의 비밀번호(필요시)',
        example: 'testPassword',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConnectWifiDto.prototype, "password", void 0);
