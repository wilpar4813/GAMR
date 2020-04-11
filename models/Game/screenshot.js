const mongoose = require("mongoose");
const Game = require("./game.js");
 
const Schema = mongoose.Schema;

const screenshotSchema = new Schema ({
    game: { type: Schema.Types.ObjectId, ref: Game, required: true },
    image_id: { type: String },
    height: { type: Number },
    width: { type: Number }
})

const ScreenShot = mongoose.model("Screenshot", screenshotSchema);
 
module.exports = ScreenShot;
