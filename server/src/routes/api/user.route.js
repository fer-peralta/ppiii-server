import express from "express"
import * as UserController from "../../controllers/user.controller.js"

const router = express.Router()

router.get("/", UserController.getUsers)

router.post("/", UserController.saveUser)

router.put("/:id", UserController.updateUser)

router.get("/:id", UserController.findUser)

router.delete("/:id", UserController.deleteUser)

export { router as userRouter }