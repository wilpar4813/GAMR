const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const releaseDateSchema = new Schema ({
    game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
    date: { type: Date }, 
    platform: { type: Schema.Types.ObjectId, ref: "Platform" }
});

const ReleaseDate = mongoose.model("ReleaseDate", releaseDateSchema);

module.exports = ReleaseDate;
