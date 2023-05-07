import express from 'express'
import * as SessionController from '../../controllers/sesion.controller.js'

const router = express.Router()

router.post('/signup', SessionController.SignUpUserController)

router.post('/login', SessionController.logInUserController)

router.get('/logout', SessionController.logOutUserController)

router.get('/profile', SessionController.profileUserController)

export { router as sessionRouter }
