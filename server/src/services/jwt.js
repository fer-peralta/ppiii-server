import jwt from 'jsonwebtoken'

export const PRIVATE_KEY = 'secretpp3'

export const generateToken = user => {
  const token = jwt.sign({ data: user }, PRIVATE_KEY, { expiresIn: '24h' })
  return token
}

export const getTokenData = token => {
  let data = null
  jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
    if (err) {
      console.log('Error al obtener data del token')
    } else {
      data = decoded
    }
  })

  return data
}
