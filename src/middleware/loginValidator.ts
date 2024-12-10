// src/middleware/validators.ts
import { body } from 'express-validator'

export const loginValidator = [
  body('email').isEmail().withMessage('Invalid email.'),
  body('password').notEmpty().withMessage('Password is required.'),
]
