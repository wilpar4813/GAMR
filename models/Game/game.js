const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: { type: String, required: true },
    totalRating: { type: Schema.Types.Decimal128 },
    totalRatingCount: { type: Number },
    summary: { type: String },
    url: { type: String },
    covers: [
        {
            type: Schema.Types.ObjectId,
            ref: "Cover",
            
        },
    ],
    screenshots: [
        {
            type: Schema.Types.ObjectId,
            ref: "Screenshot",
        },
    ],
    platforms: [
        {
            type: Schema.Types.ObjectId,
            ref: "Platform",
        },
    ],
    releaseDates: [
        {
            type: Schema.Types.ObjectId,
            ref: "ReleaseDate",
        },
    ],
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
