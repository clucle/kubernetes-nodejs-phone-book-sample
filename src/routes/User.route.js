const express = require('express');
const router = express.Router();
const {homePage, loginPage} = require("../controllers/User.controller");

router.get("/", homePage);

router.get("/login", loginPage);

module.exports = router;