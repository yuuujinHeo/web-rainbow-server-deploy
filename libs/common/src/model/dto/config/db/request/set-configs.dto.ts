import { IsArray, IsString, Length } from 'class-validator';
import { SetConfigDto } from './set-config.dto';

export class SetConfigsDto {
  @IsArray()
  configs: SetConfigDto[];
}
