import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { GenericService } from '../common/generic/generic.service';

@Injectable()
export class UsersService extends GenericService<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    super(usersRepository);
  }

  getFindByIdOptions(id: number): FindOneOptions<User> {
    return { where: { id: id } };
  }
}
