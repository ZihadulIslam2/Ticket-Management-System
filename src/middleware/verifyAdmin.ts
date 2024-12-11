import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { DecodedToken } from '../@types/index'

const verifyAdmin = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res
      .status(401)
      .json({ message: 'Unauthorized access. Token missing or invalid.' })
    return
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken

    if (decoded.role !== 'admin') {
      res.status(403).json({ message: 'Forbidden. Admin access only.' })
      return
    }

    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token.' })
  }
}

export default verifyAdmin
