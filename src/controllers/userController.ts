import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Bus from '../models/Bus'
import Ticket from '../models/Ticket'

// View all buses
export const viewBuses = async (req: Request, res: Response) => {
  try {
    const buses = await Bus.find()
    res.status(200).json(buses)
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred'
    res
      .status(500)
      .json({ message: 'Error fetching buses', error: errorMessage })
  }
}

// View all tickets
export const viewTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await Ticket.find({ isAvailable: true }) // Only show available tickets
    res.status(200).json(tickets)
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred'
    res
      .status(500)
      .json({ message: 'Error fetching tickets', error: errorMessage })
  }
}

// Purchase ticket
export const purchaseTicket = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { ticketId } = req.body

    // Ensure the ticket ID is provided
    if (!ticketId) {
      res.status(400).json({ message: 'Ticket ID is required.' })
      return
    }

    // Find the ticket by ID
    const ticket = await Ticket.findById(ticketId)

    if (!ticket) {
      res.status(404).json({ message: 'Ticket not found.' })
      return
    }

    // Check if the ticket is available
    if (!ticket.isAvailable) {
      res.status(400).json({ message: 'Ticket is already sold.' })
      return
    }

    // Assign the authenticated user as the purchaser
    const userId = req.user?.id

    if (!userId) {
      res.status(401).json({ message: 'User is not authenticated.' })
      return
    }

    // Convert userId to mongoose.Types.ObjectId
    ticket.purchasedBy = new mongoose.Types.ObjectId(userId)
    ticket.isAvailable = false

    // Save the updated ticket
    await ticket.save()

    res.status(200).json({
      message: 'Ticket purchased successfully!',
      ticket,
    })
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred'
    res
      .status(500)
      .json({ message: 'Error purchasing ticket', error: errorMessage })
  }
}
