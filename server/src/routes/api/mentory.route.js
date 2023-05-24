import express from 'express'
import * as MentoryController from '../../controllers/mentory.crud.controller.js'

const router = express.Router()

// router.get('/', MentoryController.getMentories)

router.get('/', MentoryController.getMentories)

router.post('/', MentoryController.saveMentory)

router.delete('/deleteall', MentoryController.deleteAllMentories)


router.put('/:id', MentoryController.updateMentory)

router.get('/:id', MentoryController.findMentory)

router.delete('/:id', MentoryController.deleteMentory)

export { router as mentoryRouter }
