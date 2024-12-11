import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const secret = process.env.JWT_SECRET
if (!secret) {
  throw new Error('JWT secret is not defined in environment variables')
}

// Define the shape of the decoded token
interface DecodedToken {
  id: string
  role: string
}

// Extend the Request interface
interface AuthenticatedRequest extends Request {
  user?: DecodedToken
}

// Middleware to authenticate user
const authenticateUser = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    res.status(401).json({ message: 'Token not provided' })
    return
  }

  try {
    const decoded = jwt.verify(token, secret) as DecodedToken // Verify and type the token
    req.user = decoded // Attach the decoded token to `req.user`
    next()
  } catch (error: any) {
    res.status(401).json({
      message:
        error.name === 'TokenExpiredError' ? 'Token expired' : 'Invalid token',
    })
  }
}

export default authenticateUser
