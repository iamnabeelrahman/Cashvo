const express = require('express');
const { Router } = require("express");
const { getBalance } = require('../controller/account.controller');
const { verifyExistence } = require('../middlewares/auth.middlewares');

const router = Router();

router.route("/balance").get( verifyExistence, getBalance)

module.exports = router;