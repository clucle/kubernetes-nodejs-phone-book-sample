const express = require('express');
const router = express.Router();
const {homePage, loginPage, doLogin} = require("../controllers/User.controller");

router.get("/", homePage);

router.get("/login", loginPage);

router.post("/login", doLogin);

module.exports = router;