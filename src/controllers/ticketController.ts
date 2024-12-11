import { Request, Response } from 'express'
import Ticket from '../models/Ticket'
import { handleError } from '../utils/errorHandler'

// Create a Ticket
export const createTicket = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { bus, price, time } = req.body

    if (!bus || !price || !time) {
      res.status(400).json({ message: 'Bus, price, and time are required.' })
      return
    }

    const newTicket = new Ticket({ bus, price, time })
    await newTicket.save()

    res.status(201).json({
      message: 'Ticket created successfully.',
      ticket: newTicket,
    })
  } catch (error) {
    handleError(res, error, 'Error creating ticket.')
  }
}

// Update a Ticket
export const updateTicket = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const updates = req.body

    const updatedTicket = await Ticket.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    })

    if (!updatedTicket) {
      res.status(404).json({ message: 'Ticket not found.' })
      return
    }

    res.status(200).json({
      message: 'Ticket updated successfully.',
      ticket: updatedTicket,
    })
  } catch (error) {
    handleError(res, error, 'Error updating ticket.')
  }
}

// Delete a Ticket
export const deleteTicket = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params

    const deletedTicket = await Ticket.findByIdAndDelete(id)

    if (!deletedTicket) {
      res.status(404).json({ message: 'Ticket not found.' })
      return
    }

    res.status(200).json({
      message: 'Ticket deleted successfully.',
    })
  } catch (error) {
    handleError(res, error, 'Error deleting ticket.')
  }
}
