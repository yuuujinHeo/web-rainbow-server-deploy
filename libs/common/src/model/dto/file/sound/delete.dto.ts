import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";
import { soundDescription } from "./description";
import { RESULT_SUCCESS } from "@app/common/constant/result";

export class DeleteSoundRequestDto {
    @IsString()
    @ApiProperty({
        description: soundDescription.FILENAME,
        example: 'test.mp3',
        required: true,
    })
    @Length(1,50)
    fileName: string;
}

export class DeleteSoundResponseDto extends DeleteSoundRequestDto {
    @IsString()
    @ApiProperty({
        description: soundDescription.RESULT,
        example: RESULT_SUCCESS
    })
    result: string;
}