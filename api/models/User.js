const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSChema = new Schema({
    username: {
        type: String,
        require: true,
        min: 4,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
});

const UserModel = model("User", UserSChema);
module.exports = UserModel;
