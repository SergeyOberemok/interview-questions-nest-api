import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Observable<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }
}
