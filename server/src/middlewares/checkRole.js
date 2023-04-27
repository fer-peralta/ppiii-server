const isAdmin = true

const adminValidationError = () => {
  const error = {
    error: -1,
    descripcion: 'Unauthorized'
  }
  return error
}

export const checkAdminRole = (req, res, next) => {
  if (!isAdmin) {
    res.json(adminValidationError())
  } else {
    next()
  }
}
