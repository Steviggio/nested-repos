import { ApiProperty } from "@nestjs/swagger";
import { Entity, ObjectIdColumn, Column } from "typeorm"
import { Exclude, plainToClass } from "class-transformer";
import { v4 } from "uuid";

const uuidv4 = v4

@Entity({
  name: 'users',
  orderBy: {
    createdAt: 'ASC'
  }
})
export class UserEntity {
  @ApiProperty({ description: 'The _id of the User' })
  @ObjectIdColumn()
  _id: string

  // basic

  @ApiProperty({ description: 'The name of the User' })
  @Column()
  name: string

  @ApiProperty({ description: 'The email of the User' })
  @Column()
  email: string

  @ApiProperty({ description: 'The password of the User' })
  @Exclude()
  @Column()
  password: string

  @ApiProperty({ description: 'The avatar of the User' })
  @Column()
  avatar: string

  @ApiProperty({ description: 'The createdAt of the User' })
  @Column()
  createdAt: number
  @ApiProperty({ description: 'The updatedAt of the User' })
  @Column()
  updatedAt: number

  constructor(partial: Partial<UserEntity>) {
    if (partial) {
      Object.assign(this, partial)
      this._id = this._id || uuidv4()
      this.avatar =
        this.avatar ||
        'https://res.cloudinary.com/chnirt/image/upload/v1573662028/rest/2019-11-13T16:20:22.699Z.png'
      this.createdAt = this.createdAt || +new Date()
      this.updatedAt = +new Date()
    }
  }
}