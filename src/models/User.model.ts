import mongoose, { Schema, Document } from 'mongoose'

interface IUser extends Document {
  name: string
  email: string
  password: string
  role: string
  tickets: mongoose.Types.ObjectId[]
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }],
})

export default mongoose.model<IUser>('User', UserSchema)
