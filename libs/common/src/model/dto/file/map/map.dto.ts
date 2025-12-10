import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsArray, IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { MapDto } from './type/map.type';
import { PaginationRequest } from '@app/common/pagination';
import { NodeDto } from './type/topo.type';
enum Description {
  MAPNAME = '맵 이름',
  UPDATE_DT = '맵 업데이터 시간',
  CLOUD = `맵 클라우드 데이터. 각 줄에는 4개의 값이 존재하며 순서대로 x, y, z, intensity 을 나타냅니다.
  x, y, z 는 노드의 위치를 나타냅니다. intensity 는 노드의 밀도를 나타냅니다.`,
  TOPOLOGY = '맵 토폴로지 데이터',
  FILE = '파일 이름',
  TOPO = '토폴로지 데이터',
  DOWNLOAD_FILE = '다운로드할 맵의 이름을 FRS에 저장된 fileDetailFlNm 형태로 입력해주세요.',
  DOWNLOAD_NEW_FILE = 'FRS로부터 다운로드한 맵의 이름을 변경해서 저장하려면 입력하세요.',
  IS_FORCE = '파일을 강제로 덮어씌울 지 여부. 기존 동일한 맵이 존재하면 덮어씌우거나 에러를 발생시킵니다.',
  UPLOAD_FILE = '업로드할 파일 이름',
  UPLOAD_NEW_FILE = '업로드할 맵의 이름을 변경해서 저장하려면 입력하세요.',
}

export class GetMapListResponseDto {
  @IsArray()
  @ApiProperty({ description: '맵 목록', type: [MapDto] })
  @Expose()
  list: MapDto[];
}

export class FileDto {
  @ApiProperty({
    description: Description.MAPNAME,
    example: 'Test',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  mapName: string;

  @ApiProperty({
    description: Description.FILE,
    example: 'cloud.csv',
    required: true,
  })
  @IsString()
  @Length(1, 50)
  fileName: string;
}

export class GetCloudRequestDto extends FileDto {}

export class GetCloudResponseDto extends GetCloudRequestDto {
  @ApiProperty({
    description: Description.CLOUD,
    example: [
      [1.39441, 1.24031, 0.0, 44.0],
      [1.407336, 1.24445, 0.0, 48.0],
      [3.278415, 2.045071, 0.0, 30.0],
      [3.263314, 1.578665, 0.0, 54.0],
    ],
  })
  @IsArray()
  cloud: Array<Array<number>>;
}

export class SaveCloudRequestDto extends FileDto {
  @ApiProperty({
    description: Description.CLOUD,
    example: [
      [1.39441, 1.24031, 0.0, 44.0],
      [1.407336, 1.24445, 0.0, 48.0],
      [3.278415, 2.045071, 0.0, 30.0],
      [3.263314, 1.578665, 0.0, 54.0],
    ],
  })
  @IsArray()
  cloud: Array<Array<number>>;
}

export class SaveCloudResponseDto extends SaveCloudRequestDto {}

export class SaveCloudPipeRequestDto extends FileDto {
  @ApiProperty({
    description: 'gzip 압축된 클라우드 데이터 파일 (.gz)',
    type: 'string',
    format: 'binary',
    example: 'cloud_data.gz',
  })
  @IsString()
  cloudFile: string;
}

export class SaveCloudPipeResponseDto extends FileDto {
  @ApiProperty({ description: '파일 저장 성공 여부', example: true })
  success: boolean;

  @ApiProperty({ description: '저장된 파일 경로', example: '/uploads/cloud_data.gz' })
  filePath: string;
}

export class GetTopologyPipeRequestDto extends FileDto {}

export class GetTopologyRequestDto extends PaginationRequest {
  @ApiProperty({ description: Description.MAPNAME, example: 'Small' })
  @IsString()
  @Length(1, 50)
  mapName: string;

  @ApiProperty({ description: Description.FILE, example: 'topo.json' })
  @IsString()
  @Length(1, 50)
  fileName: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: '',
    required: false,
    description: '노드 타입. 사전에 지정된 타입만 조회가능하며 해당 타입값을 입력한 경우, 해당 타입만 조회합니다.',
    enum: ['GOAL', 'ROUTE', 'INIT'],
  })
  nodeType?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: '',
    required: false,
    description: '검색단어',
  })
  searchText?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'id',
    required: false,
    enum: ['id', 'name'],
    description: '정렬옵션. id 또는 name 값을 기준으로 정렬합니다.',
  })
  sortOption?: string;
}

//TODO 체크 필요
export class GetTopologyResponseDto extends FileDto {
  @ApiProperty({ description: Description.TOPO, type: [NodeDto], required: true })
  @IsArray()
  data: NodeDto[];
}

export class SaveTopologyRequestDto extends FileDto {
  @ApiProperty({ description: Description.TOPO, required: true })
  @IsArray()
  data: NodeDto[];
}
export class SaveTopologyResponseDto extends SaveTopologyRequestDto {}

export class DownloadMapRequestDto {
  @ApiProperty({ description: Description.DOWNLOAD_FILE, example: 'Small.zip' })
  @IsString()
  @Length(1, 50)
  fileName: string;

  @ApiProperty({ description: Description.DOWNLOAD_NEW_FILE, example: 'Small' })
  @IsString()
  @Length(1, 50)
  @Optional()
  newMapName: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @ApiProperty({
    description: Description.IS_FORCE,
    example: false,
  })
  isForce: boolean;
}

export class UploadMapRequestDto {
  @ApiProperty({ description: Description.UPLOAD_FILE, example: 'Small' })
  @IsString()
  @Length(1, 50)
  mapName: string;

  @ApiProperty({ description: Description.UPLOAD_NEW_FILE, example: 'Small' })
  @IsString()
  @Length(1, 50)
  @Optional()
  newMapName: string;
}

export class DeleteMapRequestDto {
  @ApiProperty({ description: Description.MAPNAME, example: 'map1' })
  @IsString()
  @Length(1, 50)
  mapName: string;
}

export class DeleteMapResponseDto {
  @ApiProperty({ description: Description.MAPNAME, example: 'map1' })
  @IsString()
  @Length(1, 50)
  mapName: string;
}
