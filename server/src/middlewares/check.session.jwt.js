import jwt from 'jsonwebtoken'
import { PRIVATE_KEY } from '../services/jwt.js'

export const auth = (req, res, next) => {
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    return res.status(401).json({
      error: 'Not authenticated'
    })
  }
  const token = authHeader.split(' ')[1]
  try {
    jwt.verify(JSON.parse(token), PRIVATE_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          error: 'Not authorized'
        })
      }
      req.user = decoded.data
      next()
    })
  } catch (error) {
    jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
      if (err) {
        console.log(4)
        return res.status(403).json({
          error: 'Not authorized'
        })
      }
      req.user = decoded.data
      next()
    })
  }
}
