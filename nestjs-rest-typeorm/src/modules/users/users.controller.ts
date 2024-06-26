import {
  Controller,
  UseGuards,
  Post,
  Get,
  Param,
  ClassSerializerInterceptor,
  UseInterceptors,
  Put,
  Patch,
  Body,
  Delete,
  UploadedFile,
  Request
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ErrorResponseDto } from './dto/error-reponse.dto';
import { AuthService } from 'src/auth/auth.service';


@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) { }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Post()
  async insert(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.usersService.insert(createUserDto)

    const loginResponseDto = await this.authService.login(newUser)

    return loginResponseDto
  }

  @Get()
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id)
  }

  @Delete()
  remove(@Param("id") id: string) {
    return this.usersService.deleteOne(id)
  }
}
