import { RESULT_SUCCESS } from '@app/common/constant/result';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsBoolean, IsNumber, IsString, Length } from 'class-validator';

enum Description {
  FILENAME = '실행/삭제할 파일명을 입력하세요. 파일은 서버 실행경로의 sound 폴더 내부에 존재해야합니다.',
  VOLUME = '플레이 사운드의 볼륨을 입력하세요. 값은 0 ~ 100 (%) 값이어야 합니다.',
  IS_REPEAT = '플레이반복할 횟수를 입력하세요. 0 혹은 1의 값의 경우 반복하지 않습니다.',
  IS_WAITUNTILDONE = '요청에 대한 응답을 언제 받을 것인지 여부를 결정합니다. 값이 true면 플레이가 종료된 후에 응답을 받고 값이 false면 플레이를 기다리지 않고 실행과 동시에 바로 응답을 받습니다.',
  RESULT = '',
  LIST = '파일 실행경로의 sound 폴더 내부에 존재하는 모든 mp3 파일 리스트를 반환합니다.',
}

export class SoundDto {
  @IsString()
  @ApiProperty({
    description: Description.FILENAME,
    example: 'test.mp3',
    required: true,
  })
  @Length(1, 50)
  fileName: string;
}

export class PlaySoundRequestDto extends SoundDto {
  @ApiProperty({
    description: Description.VOLUME,
    example: 100,
  })
  volume: number;

  @ApiProperty({
    description: Description.IS_REPEAT,
    example: 0,
  })
  repeatCount: number;

  @ApiProperty({
    description: Description.IS_WAITUNTILDONE,
    example: true,
  })
  isWaitUntilDone: boolean;
}

export class PlaySoundResponseDto extends PlaySoundRequestDto {}

export class StopSoundResponseDto extends PlaySoundRequestDto {}

export class DeleteSoundRequestDto extends SoundDto {}

export class DeleteSoundResponseDto extends DeleteSoundRequestDto {}

export class AddSoundRequestDto extends SoundDto {}
export class SoundListResponseDto {
  @IsArray()
  @ApiProperty({
    description: Description.LIST,
    example: ['test.mp3', 'temp.mp3'],
  })
  list: string[];
}
