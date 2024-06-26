import { Module } from "@nestjs/common";
import { ACCESS_TOKEN_SECRET } from "../environments"
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";



@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt", session: true }),
    JwtModule.register({
      secret: ACCESS_TOKEN_SECRET!,
      signOptions: { expiresIn: "24h" }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})

export class AuthModule { }
