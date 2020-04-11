const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: { type: String, required: true }
})

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;

// each user will have their own game selection, so need to associate the user table 