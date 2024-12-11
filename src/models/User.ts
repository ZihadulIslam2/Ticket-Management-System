import mongoose, { Schema } from 'mongoose'
import { IUser } from '../interfaces/user'

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'User'], default: 'User' },
  },
  { timestamps: true }
)

export default mongoose.model<IUser>('User', UserSchema)
