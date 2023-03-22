const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoinSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Coin = mongoose.model('Coin', CoinSchema);
module.exports = Coin;