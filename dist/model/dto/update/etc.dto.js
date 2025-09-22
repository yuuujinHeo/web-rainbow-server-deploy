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
exports.CurVersionDto = exports.NewVersionGitDto = exports.PingSendToTargetResponseDto = exports.PingSendToTargetDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var Description;
(function (Description) {
    Description["SOFTWARE"] = "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC885\uB958 (\uC608: rrs, slamnav2)";
})(Description || (Description = {}));
class PingSendToTargetDto {
}
exports.PingSendToTargetDto = PingSendToTargetDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: '타겟 호스트',
        default: '192.168.1.1',
    }),
    __metadata("design:type", String)
], PingSendToTargetDto.prototype, "target", void 0);
class PingSendToTargetResponseDto extends PingSendToTargetDto {
}
exports.PingSendToTargetResponseDto = PingSendToTargetResponseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: '타겟 호스트에 5번 ping 전송 결과',
        default: '요청에 성공했습니다.',
    }),
    __metadata("design:type", String)
], PingSendToTargetResponseDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ping 결과 stdout',
        default: 'PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=254 time=1.87 ms\n\n--- 192.168.1.1 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 1.874/1.874/1.874/0.000 ms\n',
    }),
    __metadata("design:type", String)
], PingSendToTargetResponseDto.prototype, "stdout", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ping 결과 stderr',
        default: '',
    }),
    __metadata("design:type", String)
], PingSendToTargetResponseDto.prototype, "stderr", void 0);
class NewVersionGitDto {
}
exports.NewVersionGitDto = NewVersionGitDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: '핫픽스 여부',
        default: false,
    }),
    __metadata("design:type", Boolean)
], NewVersionGitDto.prototype, "hotfix", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: '최신 버전',
        default: 'rrs-20250812125004',
    }),
    __metadata("design:type", String)
], NewVersionGitDto.prototype, "new_version", void 0);
class CurVersionDto {
}
exports.CurVersionDto = CurVersionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: '현재 버전',
        default: 'rrs-20250812125004',
    }),
    __metadata("design:type", String)
], CurVersionDto.prototype, "current", void 0);
