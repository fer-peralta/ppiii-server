import express from 'express'

import * as UserSubscriptionsController from '../../controllers/user.subscriptions.controller.js'
import { auth } from '../../middlewares/check.session.jwt.js'

const router = express.Router()

router.get('/', auth, UserSubscriptionsController.getUserSubscriptions)

router.post('/', auth, UserSubscriptionsController.saveUserSubscription)

router.delete(
  '/deleteall',
  auth,
  UserSubscriptionsController.deleteAllUserSubscriptions
)

router.delete('/', auth, UserSubscriptionsController.deleteUserSubscription)

export { router as subscriptionsRouter }
