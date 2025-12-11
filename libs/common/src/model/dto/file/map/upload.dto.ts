import { PaginationRequest } from "@app/common/pagination";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";
import { mapDescription } from "./description";
import { Optional } from "@nestjs/common";

export class UploadMapDto {
  @ApiProperty({ description: mapDescription.MAPNAME, example: 'Small' })
  @IsString()
  @Length(1, 50)
  mapName: string;

  @ApiProperty({ description: mapDescription.MAPNAME, example: 'Small' })
  @IsString()
  @Length(1, 50)
  @Optional()
  newMapName: string;
}