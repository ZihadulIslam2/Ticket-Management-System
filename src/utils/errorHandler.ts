import { Response } from 'express'

export const handleError = (
  res: Response,
  error: unknown,
  defaultMessage: string
) => {
  if (error instanceof Error) {
    // If it's a known `Error` type
    res.status(500).json({ message: defaultMessage, error: error.message })
  } else {
    // Handle unexpected/non-Error types gracefully
    res.status(500).json({ message: 'Unknown error occurred.' })
  }
}
