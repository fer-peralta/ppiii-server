import express from 'express'
import { config } from './config/config.js'
import { apiRouter } from './routes/index.route.js'
import { logInfo, logError } from './logs/logger.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use('/api', apiRouter)

const PORT = process.pid.PORT || config.PORT || config.PORT++

const server = app.listen(PORT, () => {
  logInfo.info(
    `Server running in process ${process.pid} and listening on port ${PORT}`
  )
})
server.on('error', error =>
  logError.error({
    message: 'There was an error running the server',
    error: error
  })
)
