const createError = require('http-errors');
const mongoose = require('mongoose');

const Coin = require('../Models/Coin.model');

module.exports = {
  createCoin: async (req, res, next) => {
    try {
      const coin = new Coin(req.body);
      const result = await product.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }
};