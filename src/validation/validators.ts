import Joi from 'joi'
import { Request, Response, NextFunction } from 'express'

// Joi schema for user registration validation
const registerSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': 'Name is required.',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email.',
    'string.empty': 'Email is required.',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long.',
    'string.empty': 'Password is required.',
  }),
})

// Middleware to validate registration data
export const registerValidator = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = registerSchema.validate(req.body, { abortEarly: false })

  if (error) {
    const errors = error.details.map((detail) => detail.message)
    res.status(400).json({ errors })
    return
  }

  next()
}
