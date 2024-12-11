import express from 'express'
import { addBus, updateBus, deleteBus } from '../controllers/busController'
import verifyAdmin from '../middleware/verifyAdmin'
const router = express.Router()

// Create a new bus
router.post('/bus', verifyAdmin, addBus)

// Update an existing bus
router.put('/bus/:id', verifyAdmin, updateBus)

// Delete a bus
router.delete('/bus/:id', verifyAdmin, deleteBus)

export default router
