import express from 'express'
import * as MentoryController from '../../controllers/mentory.crud.controller.js'
import { auth } from '../../middlewares/check.session.jwt.js'

const router = express.Router()

router.get('/', auth, MentoryController.getMentories)

router.get('/own', auth, MentoryController.getOwnMentories)

router.post('/', auth, MentoryController.saveMentory)

router.delete('/deleteall', auth, MentoryController.deleteAllMentories)

router.put('/:id', auth, MentoryController.updateMentory)

router.get('/:id', auth, MentoryController.findMentory)

router.delete('/:id', auth, MentoryController.deleteMentory)

export { router as mentoryRouter }
