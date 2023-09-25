import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { assert } from 'console'
import swaggerDoc from '../utils/swagger.json' assert { type: 'json' }
import path from 'path'

import { logWarn } from '../logs/logger.js'
import { userRouter } from './api/user.route.js'
import { mentoryRouter } from './api/mentory.route.js'
import { sessionRouter } from './api/session.route.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hi from express server!' })
})

router.use('/users', userRouter)
router.use('/session', sessionRouter)
router.use('/mentories', mentoryRouter)
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

// * 404
router.get('/*', (req, res) => {
  logWarn.warn(`The route doesn't exist`)
  res.status(404).sendFile('404error.html', { root: 'src/routes/error-pages' })
})

export { router as apiRouter }
