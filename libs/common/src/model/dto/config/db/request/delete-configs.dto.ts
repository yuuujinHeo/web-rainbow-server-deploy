import { IsArray, IsString, Length } from 'class-validator';
import { SetConfigDto } from './set-config.dto';
import { DeleteConfigDto } from './delete-config.dto';

export class DeleteConfigsDto {
  @IsArray()
  configs: DeleteConfigDto[];
}
