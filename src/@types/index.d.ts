import { Request } from 'express'

// Extend the Express Request interface
declare module 'express' {
  interface Request {
    user?: DecodedToken
  }
}

// Define the DecodedToken globally
interface DecodedToken {
  role: string
}
