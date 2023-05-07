import express from 'express'
import * as UserController from '../../controllers/user.crud.controller.js'

const router = express.Router()

router.get('/', UserController.getUsers)

router.post('/', UserController.saveUser)

router.delete('/deleteall', UserController.deleteAllUsers)

router.put('/:id', UserController.updateUser)

router.get('/:id', UserController.findUser)

router.delete('/:id', UserController.deleteUser)

export { router as userRouter }
