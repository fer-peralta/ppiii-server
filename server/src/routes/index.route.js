import express from "express"

const router = express.Router()

router.get("/", (req, res) =>{
    res.status(200).json({message: "Hola desde Express"})
})

//* 404
router.get("/*", (req, res) => {
    console.log(`Route doesn't exist`)
    res.status(404).send('<h1>404! Page not found</h1>');
})

export { router as apiRouter }