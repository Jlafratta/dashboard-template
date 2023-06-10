import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GenericController } from '../common/generic/generic.controller';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController extends GenericController<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }

  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return super.create(createUserDto);
  }

  @Get()
  findAll() {
    return super.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return super.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return super.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number) {
    super.remove(id);
  }
}
