import mongoose from 'mongoose'

// Ticket Interface
export interface ITicket extends mongoose.Document {
  bus: mongoose.Types.ObjectId
  price: number
  time: Date
  isAvailable: boolean
  purchasedBy?: mongoose.Types.ObjectId
}
