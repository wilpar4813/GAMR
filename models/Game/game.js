const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: { type: String, required: true },
    platforms: { type: Schema.Types.ObjectId, ref: "Platform" },
    totalRating: { type: Schema.Types.Decimal128 },
    totalRatingCount: { type: Number },
    releaseDates: { type: Schema.Types.ObjectId, ref: "ReleaseDate" },
    screenshots: { type: Schema.Types.ObjectId, ref: "Screenshot" },
    covers: { type: Schema.Types.ObjectId, ref: "Cover" },
    summary: { type: String },
    url: { type: String },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
