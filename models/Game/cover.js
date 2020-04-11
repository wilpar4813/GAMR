const mongoose = require("mongoose");
const Game = require("./game.js");

const Schema = mongoose.Schema;


const coverSchema = new Schema({
    game: { type: Schema.Types.ObjectId, ref: Game, required: true },
    image_id: { type: String },
    height: { type: Number },
    width: { type: Number }
});

const Cover = mongoose.model("Cover", coverSchema);

module.exports = Cover;
