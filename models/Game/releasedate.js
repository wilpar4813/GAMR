const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const releaseDateSchema = new Schema ({
    date: { type: Number }, 
    human: { type: String },
    gameId: { type: mongoose.Types.ObjectId},
    platformNames: [
        {
            type: Schema.Types.ObjectId,
            ref: "PlatformName",
        },
    ],
});

const ReleaseDate = mongoose.model("ReleaseDate", releaseDateSchema);

module.exports = ReleaseDate;
