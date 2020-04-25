const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coverSchema = new Schema({
    url: { type: String },
    gameId: { type: mongoose.Types.ObjectId}
});

const Cover = mongoose.model("Cover", coverSchema);

module.exports = Cover;

