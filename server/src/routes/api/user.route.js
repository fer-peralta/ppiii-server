import express from "express"
import * as UserController from "../../controllers/user.controller.js"

const router = express.Router()

router.get("/", UserController.getUsers)

router.get("/:id", UserController.findUser)

export { router as userRouter }