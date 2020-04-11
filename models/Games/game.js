const mongoose = require("mongoose");
require("mongoose-double")(mongoose);

const Schema = mongoose.Schema;
// const SchemaTypes = mongoose.Schema.Types;

const gameSchema = new Schema({
    name: { type: String, required: true },

    platforms: { type: String },
    totalRating: { type: Double },
    releaseDates: { type: String },
    screenshots: { type: Schema.Types.ObjectId, ref: "Screenshots" },
    cover: { type: Schema.Types.ObjectId, ref: "Cover" },
    summary: { type: String },
    url: { type: String },
});

const coverSchema = new Schema({
    game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
    image_id: { type: String },
    height: { type: Number },
    width: { type: Number }
});

const screenshotSchema = new Schema ({
    game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
    image_id: { type: String },
    height: { type: Number },
    width: { type: Number }
})



const Game = mongoose.model("Game", gameSchema);
const Cover = mongoose.model("Cover", coverSchema);
const ScreenShot = mongoose.model("Screenshots", screenshotSchema);

module.exports = Game;
module.exports = Cover;
module.exports = ScreenShot;

// each user will have their own game selection, so need to associate the user table
