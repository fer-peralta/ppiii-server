import bcrypt from 'bcrypt'

export const createHash = password => {
  const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  return hash
}
export const isValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password)
}
