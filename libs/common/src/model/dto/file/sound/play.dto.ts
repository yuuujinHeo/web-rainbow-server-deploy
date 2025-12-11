import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString, Length } from "class-validator";
import { soundDescription } from "./description";
import { RESULT_SUCCESS } from "@app/common/constant/result";
import { Transform, Type } from "class-transformer";

export class PlaySoundRequestDto {
    @IsString()
    @ApiProperty({
        description: soundDescription.FILENAME,
        example: 'test.mp3',
        required: true,
    })
    @Length(1,50)
    fileName: string;

    @Type(()=>Number)
    @IsNumber()
    @ApiProperty({
        description: soundDescription.VOLUME,
        example: 100,
    })
    volume: number;

    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    @ApiProperty({
        description: soundDescription.IS_REPEAT,
        example: false,
    })
    isRepeat: boolean;

    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    @ApiProperty({
        description: soundDescription.IS_WAITUNTILDONE,
        example: true,
    })
    isWaitUntilDone: boolean;
}

export class PlaySoundResponseDto extends PlaySoundRequestDto {
    @IsString()
    @ApiProperty({
        description: soundDescription.RESULT,
        example: RESULT_SUCCESS
    })
    result: string;
}