import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { USER_REPOSITORY } from "../core/constants/index";


@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: typeof User
  ) {}
  
  async findAll() {
    return 'This action adds a new user';
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }


  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
