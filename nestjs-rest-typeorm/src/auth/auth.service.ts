import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginResponseDto } from "src/modules/users/dto/login-response.dto";
import { UserEntity } from "src/modules/users/user.entity";
import { comparePassword } from "src/utils/password";
import { getMongoRepository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await getMongoRepository(UserEntity).findOne({
      where: {
        email
      }
    })
    if (user && (await comparePassword(password, user.password))) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: UserEntity): Promise<LoginResponseDto> {
    const { _id } = user
    const payload = { sub: _id }
    const expiresIn = 60 * 60 * 24 * 30

    return {
      accessToken: this.jwtService.sign(payload, {
        expiresIn
      }),
      user,
      expiresIn
    }
  }
}