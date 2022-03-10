import { IsNumber, IsDefined, IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsString()
  public name: string;

  @IsDefined()
  @IsNumber()
  public age: number;

  @IsOptional()
  @IsString()
  public nickname?: string;
}
