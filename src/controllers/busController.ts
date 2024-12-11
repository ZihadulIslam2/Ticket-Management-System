import { Request, Response } from 'express'
import Bus from '../models/Bus'
import { handleError } from '../utils/errorHandler'

export const addBus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, route, description } = req.body

    // Validate request
    if (!name || !route) {
      res.status(400).json({ message: 'Name and route are required.' })
      return
    }

    // Create and save the new bus
    const newBus = new Bus({ name, route, description })
    await newBus.save()

    res.status(201).json({ message: 'Bus added successfully.', bus: newBus })
  } catch (error) {
    handleError(res, error, 'Error adding bus.')
  }
}

export const updateBus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const { name, route, description } = req.body

    const updatedBus = await Bus.findByIdAndUpdate(
      id,
      { name, route, description },
      { new: true, runValidators: true }
    )

    if (!updatedBus) {
      res.status(404).json({ message: 'Bus not found.' })
      return
    }

    res
      .status(200)
      .json({ message: 'Bus updated successfully.', bus: updatedBus })
  } catch (error) {
    handleError(res, error, 'Error updating bus.')
  }
}

export const deleteBus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    const deletedBus = await Bus.findByIdAndDelete(id)

    if (!deletedBus) {
      res.status(404).json({ message: 'Bus not found.' })
      return
    }

    res
      .status(200)
      .json({ message: 'Bus deleted successfully.', bus: deletedBus })
  } catch (error) {
    handleError(res, error, 'Error deleting bus.')
  }
}
