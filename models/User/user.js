const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

})

const User = mongoose.model("User", userSchema);

module.exports = User;

// Login , emails, games saved, lookup post author example in class