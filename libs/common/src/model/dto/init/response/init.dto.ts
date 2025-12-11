import { ApiProperty } from "@nestjs/swagger";
import { FrsDescription } from "../../description";
import { UrlUtil } from "@app/common/util";
import { IsString, Length } from "class-validator";

export class InitResponseDto {
  @ApiProperty({
    description: FrsDescription.ROBOT_SERIAL,
    example: UrlUtil.generateUUID(),
    required: true,
  })
  @IsString()
  @Length(1, 50)
  robotSerial: string;
}
