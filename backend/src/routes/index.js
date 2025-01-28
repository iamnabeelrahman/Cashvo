const {Router} = require('express')
const userRouter = require("./user.routes.js")
const authRouter = require("./auth.routes.js")


const router = Router()
router.use("/user", userRouter)
router.use("/auth", authRouter)

module.exports = router;

