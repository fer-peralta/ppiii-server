import express from 'express'
import * as UserSubscriptionsController from '../../controllers/user.subscriptions.controller.js'
import { auth } from '../../middlewares/check.session.jwt.js'

const router = express.Router()

router.get('/:id', auth, UserSubscriptionsController.getUserSubscriptions)

router.post('/:id', auth, UserSubscriptionsController.saveUserSubscription)

router.delete(
  '/deleteall',
  auth,
  UserSubscriptionsController.deleteAllUserSubscriptions
)

router.delete('/:id', auth, UserSubscriptionsController.deleteUserSubscription)

export { router as subscriptionsRouter }
