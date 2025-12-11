import { IsString, Length } from 'class-validator';

export class DeleteConfigDto {
  @IsString()
  @Length(1, 50)
  key: string;
}
