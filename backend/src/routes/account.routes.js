const express = require('express');
const { Router } = require("express");
const { getBalance, transferBalance } = require('../controller/account.controller');
const { verifyExistence } = require('../middlewares/auth.middlewares');

const router = Router();

router.route("/balance").get( verifyExistence, getBalance)
router.route("/transfer").post( verifyExistence, transferBalance)

module.exports = router;