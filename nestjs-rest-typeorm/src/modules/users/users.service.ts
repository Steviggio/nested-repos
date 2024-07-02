import {
  Injectable,
  ForbiddenException,
  NotFoundException
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository, getMongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// import * as speakeasy from "speakeasy"
// import { Validator } from 'class-validator';

import { UserEntity } from './user.entity';
import { hashPassword } from 'src/utils/password';
import { UpdateUserDto } from './dto/update-user.dto';
// import { ObjectId } from 'mongodb';
import { UpdateResult } from 'typeorm';

export type User = any

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity | undefined>
  ) { }


  async insert(createUserDto: CreateUserDto): Promise<User | undefined> {
    const { email } = createUserDto
    const existedUser = await this.userRepository.findOne({ where: { email } })

    if (existedUser) {
      throw new ForbiddenException("User already exists.")
    }

    const newUser = await this.userRepository.save(
      new UserEntity({
        ...createUserDto,
        password: await hashPassword(createUserDto.password)
      })
    )
    return newUser
  }

  async findAll(): Promise<User[] | undefined> {
    return this.userRepository.find()
  }

  async findOne(_id: string): Promise<User | undefined> {
    // console.log(`Looking for user with _id: ${_id}`);
    const foundUser = await this.userRepository.findOne({ where: { _id } });
    // console.log(`Found user: ${JSON.stringify(foundUser)}`);

    if (!foundUser) {
      throw new NotFoundException("User not found.")
    }

    return foundUser
  }

  async deleteOne(_id: string): Promise<{ message: string; deleted: boolean }> {
    const foundUser = await this.userRepository.findOne({ where: { _id } });

    if (!foundUser) {
      throw new NotFoundException('User not found.');
    }

    const deleteResult = await this.userRepository.delete(foundUser);

    if (deleteResult.affected > 0) {
      return { message: 'User deleted successfully.', deleted: true };
    } else {
      return { message: 'Failed to delete user.', deleted: false };
    }
  }

  async findOneAndUpdate(
    _id: string,
    updateUserDto: UpdateUserDto
  ): Promise<User | undefined> {
    console.log(`Looking for user with _id: ${_id}`);
    const foundUser = await this.userRepository.findOne({ where: { _id } });
    console.log(`Found user: ${JSON.stringify(foundUser)}`);

    if (!foundUser) {
      throw new NotFoundException('User not found.');
    }

    // Hash the password if it is being updated
    if (updateUserDto.password) {
      updateUserDto.password = await hashPassword(updateUserDto.password);
    }

    // Update the user entity with the new data
    const result: UpdateResult = await this.userRepository.update(foundUser, updateUserDto);
    // await this.userRepository.save(updatedUser);

    if (result.affected > 0) {
      return { message: "User has been modified.", updatedFields: updateUserDto };
    } else {
      throw new Error("An error as occurred when trying to modify the user's informations.")
    }
  }
}
