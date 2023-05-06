import jwt from 'jsonwebtoken'

export const PRIVATE_KEY = 'secretpp3'

export const generateToken = user => {
  const token = jwt.sign({ data: user }, PRIVATE_KEY, { expiresIn: '24h' })
  return token
}
