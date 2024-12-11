import { Request, Response } from 'express'

export const logout = async (req: Request, res: Response) => {
  // Clear the JWT cookie 
  res.status(200).clearCookie('token').json({ message: 'Logout successful' })
}
