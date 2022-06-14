import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserDto } from 'src/data-layer/models';
import { User } from 'src/database-layer/schema/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() userDto: UserDto): Observable<User> {
    return this.userService.create(userDto);
  }
}
