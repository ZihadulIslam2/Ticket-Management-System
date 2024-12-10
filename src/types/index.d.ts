import { Request } from 'express'

// Extend the Express Request interface
declare module 'express' {
  interface Request {
    user?: DecodedToken
  }
}

// Define the token type
export interface DecodedToken {
  role: string
}
