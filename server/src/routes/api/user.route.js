import express from "express"
import * as UserController from "../../controllers/user.controller.js"

const router = express.Router()

router.get("/", UserController.getUsers)

export { router as apiRouter }