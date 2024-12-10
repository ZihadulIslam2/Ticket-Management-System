import express from 'express'
import {
  createTicket,
  updateTicket,
  deleteTicket,
} from '../controllers/ticketController'
import verifyAdmin from '../middleware/verifyAdmin'

const router = express.Router()

// Create a ticket (POST /admin/ticket)
router.post('/admin/ticket', verifyAdmin, createTicket)

// Update a ticket (PUT /admin/ticket/:id)
router.put('/admin/ticket/:id', verifyAdmin, updateTicket)

// Delete a ticket (DELETE /admin/ticket/:id)
router.delete('/admin/ticket/:id', verifyAdmin, deleteTicket)

export default router
