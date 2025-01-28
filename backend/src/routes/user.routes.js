const express = require('express');
const {Router} = require('express');
const { verifyExixtence } = require('../middlewares/auth.middlewares');

const router = Router()

router.route("/bulk").put(verifyExixtence)

module.exports = router;