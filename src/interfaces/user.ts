import mongoose from 'mongoose'

// User Interface
export interface IUser extends mongoose.Document {
  name: string
  email: string
  password: string
  role: 'Admin' | 'User'
}
