const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        select:false
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;