import { ApiProperty } from '@nestjs/swagger';
import { Length, IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    required: false,
    description: 'The name of the User',
  })
  @Length(5, 20)
  @IsOptional()
  username: string;

  @ApiProperty({
    example: "john.doe@gmail.com",
    description: "Email of the user"
  })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({
    required: false,
    description: 'The referralCode of the User',
  })
  @Length(8, 8)
  @IsOptional()
  readonly referralCode: string;

  @ApiProperty({
    example: "mockingpwd",
    description: "Password of the user"
  })
  @IsOptional()
  password: string
}