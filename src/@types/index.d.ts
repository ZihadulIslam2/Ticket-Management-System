import { Request } from 'express'

// Extend the Express Request interface
declare module 'express' {
  interface Request {
    user?: DecodedToken;
  }
}

// Define the DecodedToken globally
interface DecodedToken {
  id: string; // Add this field
  role: string;
}

