import express from 'express'
import * as UserController from '../../controllers/user.crud.controller.js'
import * as UserMentoriesController from '../../controllers/user.subscriptions.controller.js'
import { subscriptionsRouter } from './subscriptions.route.js'

const router = express.Router()

router.get('/', UserController.getUsers)

router.post('/', UserController.saveUser)

router.delete('/deleteall', UserController.deleteAllUsers)

router.put('/:id', UserController.updateUser)

router.get('/:id', UserController.findUser)

router.delete('/:id', UserController.deleteUser)

router.use('/subscriptions', subscriptionsRouter)

export { router as userRouter }
