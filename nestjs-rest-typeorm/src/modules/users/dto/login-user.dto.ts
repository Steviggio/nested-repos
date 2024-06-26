import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEmail } from 'class-validator'

export class LoginUserDto {
  @ApiProperty({
    default: 'john.doe@gmail.com',
    example: 'john.doe@gmail.com',
    description: 'The email of the User'
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string

  @ApiProperty({
    default: 'mockpwd',
    example: 'mockpwd',
    description: 'The password of the User'
  })
  @IsNotEmpty()
  readonly password: string
}