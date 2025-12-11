import { PaginationRequest } from "@app/common/pagination";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, Length } from "class-validator";
import { mapDescription } from "./description";
import { Optional } from "@nestjs/common";
import { Transform } from "class-transformer";

export class DownloadMapDto {
  @ApiProperty({ description: '다운로드할 맵의 이름을 FRS에 저장된 fileDetailFlNm 형태로 입력해주세요.', example: 'Small.zip' })
  @IsString()
  @Length(1, 50)
  fileName: string;

  @ApiProperty({ description: 'FRS로부터 다운로드한 맵의 이름을 변경해서 저장하려면 입력하세요.', example: 'Small' })
  @IsString()
  @Length(1, 50)
  @Optional()
  newMapName: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @ApiProperty({
      description: '파일을 강제로 덮어씌울 지 여부. 기존 동일한 맵이 존재하면 덮어씌우거나 에러를 발생시킵니다.',
      example: false,
  })
  @IsBoolean()
  isForce: boolean;
}