const { Schema, default: mongoose } = require("mongoose");

const userModel = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.models.User || mongoose.model('User',userModel) 

module.exports = User;