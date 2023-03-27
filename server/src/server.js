import express from "express"
import { apiRouter } from "./routes/index.route.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use("/api", apiRouter)

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
server.on('error', error => console.log(`Error in server ${error}`))