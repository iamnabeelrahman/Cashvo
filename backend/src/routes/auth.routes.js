const express = require('express');
const { Router } = require("express");
const { signupUser } = require('../controller/auth.controller');

const router = Router();

router.route("/signup").post( signupUser)

module.exports = router;