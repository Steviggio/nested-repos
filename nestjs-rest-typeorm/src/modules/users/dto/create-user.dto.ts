import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsEmail, Length } from "class-validator"

export class CreateUserDto {
  @ApiProperty({
    example: "john doe",
    description: "Username of the user"
  })
  @Length(5, 20)
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    example: "john.doe@gmail.com",
    description: "Email of the user"
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: "mockingpwd",
    description: "Password of the user"
  })
  @IsNotEmpty()
  readonly password: string
}
