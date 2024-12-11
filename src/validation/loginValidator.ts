import Joi from 'joi'
import { Request, Response, NextFunction } from 'express'

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email.',
    'string.empty': 'Email is required.',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required.',
  }),
})

export const loginValidator = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = loginSchema.validate(req.body, { abortEarly: false })

  if (error) {
    const errors = error.details.map((detail) => detail.message)
    res.status(400).json({ errors })
    return
  }

  next()
}
