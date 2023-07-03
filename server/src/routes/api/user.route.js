import express from 'express'

import * as UserController from '../../controllers/user.crud.controller.js'
import { subscriptionsRouter } from './subscriptions.route.js'

const router = express.Router()

router.get('/', UserController.getUsers)

router.post('/', UserController.saveUser)

router.delete('/deleteall', UserController.deleteAllUsers)

router.use('/subscriptions', subscriptionsRouter)

router.put('/:id', UserController.updateUser)

router.get('/:id', UserController.findUser)

router.delete('/:id', UserController.deleteUser)

export { router as userRouter }
