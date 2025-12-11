import { ApiProperty } from "@nestjs/swagger";
import { soundDescription } from "./description";
import { RESULT_SUCCESS } from "@app/common/constant/result";
import { IsString } from "class-validator";

export class StopSoundResponseDto {
    @IsString()
    @ApiProperty({
        description: soundDescription.RESULT,
        example: RESULT_SUCCESS
    })
    result: string;
}