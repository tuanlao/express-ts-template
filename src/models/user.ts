import { model, Model, Schema } from 'mongoose';
import { User } from './types';

export const userSchema = new Schema(
  {
    name: { type: String, required: true, index: { unique: false } },
    age: { type: Number, required: true },
    nickname: { type: String, index: { unique: false } },
  },
  {
    timestamps: true,
  }
);

const UserModel: Model<User> = model<User>('users', userSchema);

export default UserModel;
