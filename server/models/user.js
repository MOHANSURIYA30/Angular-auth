const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{type:String},
    password:{type:String}
})

const userModel = mongoose.model('user',userSchema,'user')

module.exports = userModel;