const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: { type: String, required: true },
    firstReleaseDate: { type: Number },
    summary: { type: String },
    url: { type: String },
    timeToBeat: {type: String},
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
    gamePlatforms: [
        {
            type: Schema.Types.ObjectId,
            ref: "GamePlatform",
        },
    ],
    releaseDates: [
        {
            type: Schema.Types.ObjectId,
            ref: "ReleaseDate",
        },
    ],
    genres: [
        {
            type: Schema.Types.ObjectId,
            ref: "Genre",
        }
    ],
    franchises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Franchise",
        }
    ],

});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
