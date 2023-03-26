const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Object,
    username: {
        type: String,
        unique: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;