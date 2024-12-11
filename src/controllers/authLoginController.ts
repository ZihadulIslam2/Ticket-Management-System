import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      res.status(401).json({ message: 'Invalid email or password.' })
      return
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid email or password.' })
      return
    }

    const payload = {
      id: user._id,
      role: user.role,
    }

    const jwtSecret = process.env.JWT_SECRET as string
    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: '1h',
    })

    res
      .status(200)
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      })
      .json({ message: 'Login successful', token })
  } catch (error) {
    console.error(error)

    if (error instanceof Error) {
      res.status(500).json({ message: 'Server error.', error: error.message })
    } else {
      res.status(500).json({ message: 'An unknown error occurred.' })
    }
  }
}
