import mongoose, { Schema } from "mongoose";
import { ITicket } from "../interfaces/ticket";

const TicketSchema = new Schema<ITicket>({
  bus: { type: Schema.Types.ObjectId, ref: "Bus", required: true },
  price: { type: Number, required: true },
  time: { type: Date, required: true },
  isAvailable: { type: Boolean, default: true },
  purchasedBy: { type: Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model<ITicket>("Ticket", TicketSchema);
