import mongoose, { Schema, Document } from 'mongoose'

interface IBus extends Document {
  name: string
  route: string
  description: string
  tickets: mongoose.Types.ObjectId[]
}

const BusSchema = new Schema<IBus>({
  name: { type: String, required: true },
  route: { type: String, required: true },
  description: { type: String },
  tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }],
})

export default mongoose.model<IBus>('Bus', BusSchema)
