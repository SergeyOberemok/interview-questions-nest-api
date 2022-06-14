import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserDto } from 'src/data-layer/models';

export type UserDocument = User & Document;

@Schema()
export class User implements UserDto {
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
