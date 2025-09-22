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
exports.SoundListResponseDto = exports.DeleteSoundResponseDto = exports.DeleteSoundRequestDto = exports.StopSoundResponseDto = exports.PlaySoundResponseDto = exports.PlaySoundRequestDto = exports.SoundDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
var Description;
(function (Description) {
    Description["FILENAME"] = "\uC2E4\uD589/\uC0AD\uC81C\uD560 \uD30C\uC77C\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694. \uD30C\uC77C\uC740 \uC11C\uBC84 \uC2E4\uD589\uACBD\uB85C\uC758 sound \uD3F4\uB354 \uB0B4\uBD80\uC5D0 \uC874\uC7AC\uD574\uC57C\uD569\uB2C8\uB2E4.";
    Description["VOLUME"] = "\uD50C\uB808\uC774 \uC0AC\uC6B4\uB4DC\uC758 \uBCFC\uB968\uC744 \uC785\uB825\uD558\uC138\uC694. \uAC12\uC740 0 ~ 100 (%) \uAC12\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.";
    Description["IS_REPEAT"] = "\uD50C\uB808\uC774\uBC18\uBCF5\uD560 \uD69F\uC218\uB97C \uC785\uB825\uD558\uC138\uC694. 0 \uD639\uC740 1\uC758 \uAC12\uC758 \uACBD\uC6B0 \uBC18\uBCF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
    Description["IS_WAITUNTILDONE"] = "\uC694\uCCAD\uC5D0 \uB300\uD55C \uC751\uB2F5\uC744 \uC5B8\uC81C \uBC1B\uC744 \uAC83\uC778\uC9C0 \uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4. \uAC12\uC774 true\uBA74 \uD50C\uB808\uC774\uAC00 \uC885\uB8CC\uB41C \uD6C4\uC5D0 \uC751\uB2F5\uC744 \uBC1B\uACE0 \uAC12\uC774 false\uBA74 \uD50C\uB808\uC774\uB97C \uAE30\uB2E4\uB9AC\uC9C0 \uC54A\uACE0 \uC2E4\uD589\uACFC \uB3D9\uC2DC\uC5D0 \uBC14\uB85C \uC751\uB2F5\uC744 \uBC1B\uC2B5\uB2C8\uB2E4.";
    Description["RESULT"] = "";
    Description["LIST"] = "\uD30C\uC77C \uC2E4\uD589\uACBD\uB85C\uC758 sound \uD3F4\uB354 \uB0B4\uBD80\uC5D0 \uC874\uC7AC\uD558\uB294 \uBAA8\uB4E0 mp3 \uD30C\uC77C \uB9AC\uC2A4\uD2B8\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.";
})(Description || (Description = {}));
class SoundDto {
}
exports.SoundDto = SoundDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: Description.FILENAME,
        example: 'test.mp3',
        required: true,
    }),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], SoundDto.prototype, "fileName", void 0);
class PlaySoundRequestDto extends SoundDto {
}
exports.PlaySoundRequestDto = PlaySoundRequestDto;
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: Description.VOLUME,
        example: 100,
    }),
    __metadata("design:type", Number)
], PlaySoundRequestDto.prototype, "volume", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: Description.IS_REPEAT,
        example: 0,
    }),
    __metadata("design:type", Number)
], PlaySoundRequestDto.prototype, "repeatCount", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true),
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({
        description: Description.IS_WAITUNTILDONE,
        example: true,
    }),
    __metadata("design:type", Boolean)
], PlaySoundRequestDto.prototype, "isWaitUntilDone", void 0);
class PlaySoundResponseDto extends PlaySoundRequestDto {
}
exports.PlaySoundResponseDto = PlaySoundResponseDto;
class StopSoundResponseDto extends PlaySoundRequestDto {
}
exports.StopSoundResponseDto = StopSoundResponseDto;
class DeleteSoundRequestDto extends SoundDto {
}
exports.DeleteSoundRequestDto = DeleteSoundRequestDto;
class DeleteSoundResponseDto extends DeleteSoundRequestDto {
}
exports.DeleteSoundResponseDto = DeleteSoundResponseDto;
class SoundListResponseDto {
}
exports.SoundListResponseDto = SoundListResponseDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        description: Description.LIST,
        example: ['test.mp3', 'temp.mp3'],
    }),
    __metadata("design:type", Array)
], SoundListResponseDto.prototype, "list", void 0);
