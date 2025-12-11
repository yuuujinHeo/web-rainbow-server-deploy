import { IsString, Length } from 'class-validator';

export class SetConfigDto {
  @IsString()
  @Length(1, 50)
  key: string;

  @IsString()
  @Length(1, 50)
  value: string;
}
