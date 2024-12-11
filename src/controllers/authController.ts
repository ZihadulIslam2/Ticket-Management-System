import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'
import User from '../models/User.model'

export const register = async (req: Request, res: Response): Promise<void> => {
  // Validate inputs
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
    return
  }

  const { name, email, password, role } = req.body

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      res.status(400).json({ message: 'Email already registered.' })
      return
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    })

    // Save to database
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully!' })
  } catch (error) {
    console.error(error)

    if (error instanceof Error) {
      res.status(500).json({ message: 'Server error.', error: error.message })
    } else {
      res.status(500).json({ message: 'An unknown error occurred.' })
    }
  }
}
