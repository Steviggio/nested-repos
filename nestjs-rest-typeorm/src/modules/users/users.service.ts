import {
  Injectable,
  ForbiddenException,
  NotFoundException
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { getMongoRepository } from 'typeorm';

// import * as speakeasy from "speakeasy"
// import { Validator } from 'class-validator';

import { UserEntity } from './user.entity';
import { hashPassword } from 'src/utils/password';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = any

@Injectable()
export class UsersService {
  async insert(createUserDto: CreateUserDto): Promise<User | undefined> {
    const { email } = createUserDto
    const existedUser = await getMongoRepository(UserEntity).findOne({ where: { email } })

    if (existedUser) {
      throw new ForbiddenException("User already exists.")
    }

    const newUser = await getMongoRepository(UserEntity).save(
      new UserEntity({
        ...createUserDto,
        password: await hashPassword(createUserDto.password)
      })
    )
    return newUser
  }

  async findAll(): Promise<User[] | undefined> {
    return getMongoRepository(UserEntity).find()
  }

  async findOne(_id: string): Promise<User | undefined> {
    const foundUser = await getMongoRepository(UserEntity).findOne({ where: { _id } })

    if (foundUser!) {
      throw new NotFoundException("User not found.")
    }

    return foundUser
  }

  async deleteOne(_id: string): Promise<boolean | undefined> {
    const foundUser = await getMongoRepository(UserEntity).findOne({ where: { _id } })

    if (foundUser!) {
      throw new NotFoundException("User not found.")
    }

    return (getMongoRepository(UserEntity).deleteOne(foundUser))
      ? true
      : false
  }
}
