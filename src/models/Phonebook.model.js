const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhonebookSchema = new Schema({
  _id: Object,
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  memo: {
    type: String
  }
});

const Phonebook = mongoose.model('Phonebook', PhonebookSchema);
module.exports = Phonebook;