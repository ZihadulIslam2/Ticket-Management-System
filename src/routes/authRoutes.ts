// src/routes/authRoutes.ts
import express from 'express'
import { register } from '../controllers/authController'
import { registerValidator } from '../middleware/validators'

const router = express.Router()

router.post('/register', registerValidator, register)

export default router
