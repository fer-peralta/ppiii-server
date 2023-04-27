import express from 'express'
import * as UserController from '../../controllers/user.controller.js'
import passport from 'passport'
import {
  signUpStrategy,
  logInStrategy
} from '../../services/passport.strategies.js'

const router = express.Router()

passport.use('signupStrategy', signUpStrategy)
passport.use('loginStrategy', logInStrategy)

router.get('/', UserController.getUsers)

router.post('/', UserController.saveUser)

router.post('/signup', UserController.SignUpUserController)

router.post('/login', UserController.logInUserController)

router.get('/logout', UserController.logOutUserController)

router.get('/profile', UserController.profileUserController)

router.delete('/deleteall', UserController.deleteAllUsers)

router.put('/:id', UserController.updateUser)

router.get('/:id', UserController.findUser)

router.delete('/:id', UserController.deleteUser)

export { router as userRouter }
