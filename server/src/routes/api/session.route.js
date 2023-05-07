import express from 'express'
import * as SessionController from '../../controllers/sesion.controller.js'
import { auth } from '../../middlewares/check.session.jwt.js'

const router = express.Router()

router.post('/signup', SessionController.SignUpUserController)

router.post('/login', SessionController.logInUserController)

router.get('/logout', auth, SessionController.logOutUserController)

router.get('/profile', auth, SessionController.profileUserController)

export { router as sessionRouter }
