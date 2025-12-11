import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";
import { soundDescription } from "./description";

export class SoundListResponseDto {
    @IsArray()
    @ApiProperty({
        description: soundDescription.LIST,
        example: ['test.mp3','temp.mp3']
    })
    list: string[];
}