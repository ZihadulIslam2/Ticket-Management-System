import express from 'express'
import {
  viewBuses,
  viewTickets,
  purchaseTicket,
} from '../controllers/userController'
import authenticateUser from '../middleware/authenticateUser'

const router = express.Router()

// View all buses
router.get('/buses', viewBuses)

// View all tickets
router.get('/tickets', viewTickets)

// Purchase a ticket (only authenticated users can do this)
router.post('/tickets/purchase', authenticateUser, purchaseTicket)

export default router
