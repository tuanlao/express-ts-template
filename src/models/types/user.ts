import { Document } from 'mongoose';

export default interface User extends Document {
  name: string;
  age: number;
  nickname?: string;
}
