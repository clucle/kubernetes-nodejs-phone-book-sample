const express = require('express');
const router = express.Router();
const {homePage, loginPage, doLogin, signupPage, doSignup} = require("../controllers/User.controller");

router.get("/", homePage);

router.get("/login", loginPage);

router.post("/login", doLogin);

router.get("/signup", signupPage);

router.post("/signup", doSignup);

module.exports = router;