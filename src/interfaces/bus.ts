import mongoose from 'mongoose'

// Bus Interface
export interface IBus extends mongoose.Document {
  name: string
  route: string
  description: string
  tickets: mongoose.Types.ObjectId[]
}
