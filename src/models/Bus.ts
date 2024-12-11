import mongoose, { Schema } from 'mongoose'
import  {IBus}  from '../interfaces/bus'

const BusSchema = new Schema<IBus>({
  name: { type: String, required: true },
  route: { type: String, required: true },
  description: { type: String },
  tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }],
})

export default mongoose.model<IBus>('Bus', BusSchema)
