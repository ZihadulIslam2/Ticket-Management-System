import mongoose, { Schema, Document } from 'mongoose'

interface ITicket extends Document {
  bus: mongoose.Types.ObjectId
  price: number
  time: Date
  isAvailable: boolean
  purchasedBy?: mongoose.Types.ObjectId
}

const TicketSchema = new Schema<ITicket>({
  bus: { type: Schema.Types.ObjectId, ref: 'Bus', required: true },
  price: { type: Number, required: true },
  time: { type: Date, required: true },
  isAvailable: { type: Boolean, default: true },
  purchasedBy: { type: Schema.Types.ObjectId, ref: 'User' },
})

export default mongoose.model<ITicket>('Ticket', TicketSchema)
