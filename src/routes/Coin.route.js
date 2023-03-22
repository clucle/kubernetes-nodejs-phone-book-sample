const express = require('express');
const router = express.Router();

const CoinController = require('../Controllers/Coin.controller');

router.post('/', ProductController.createCoin);

module.exports = router;