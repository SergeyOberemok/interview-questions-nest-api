import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { UserDto } from 'src/data-layer/models';
import { User, UserDocument } from 'src/database-layer/schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findAll(): Observable<User[]> {
    return from(this.userModel.find().exec());
  }

  create(userDto: UserDto): Observable<User> {
    const user = new this.userModel(userDto);

    return from(user.save());
  }
}
