const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhonebookSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Phonebook = mongoose.model('Phonebook', PhonebookSchema);
module.exports = Phonebook;