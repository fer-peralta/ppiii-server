export const checkLogin = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.json({
      message: `If you have an account please log in, if don't try sign up`
    })
  }
}
