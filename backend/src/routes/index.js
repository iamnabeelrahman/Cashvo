const {Router} = require('express')
const userRouter = require("./user.routes.js")
const authRouter = require("./auth.routes.js")
const accountRouter = require("./account.routes.js")
 

const router = Router()

router.use("/user", userRouter)
router.use("/auth", authRouter)
router.use("/account", accountRouter)

module.exports = router;



// GET /user/profile: Get the authenticated user's profile details.
// PUT /user/profile: Update the user's profile information (like name, email, etc.).
// DELETE /user/profile: Delete the user's account (if needed).
// GET /user/:id: Get details of a specific user (if you're allowing public profiles).

// POST /auth/register: Register a new user (create a new account).
// POST /auth/login: Authenticate the user with credentials (email/password) and return a JWT token.
// POST /auth/logout: End the user's session.
// POST /auth/refresh: Refresh the JWT token if using token-based authentication.