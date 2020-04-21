const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const releaseDateSchema = new Schema ({
    date: { type: Number }, 
    human: { type: Date },
    gameId: { type: mongoose.Types.ObjectId}
});

const ReleaseDate = mongoose.model("ReleaseDate", releaseDateSchema);

module.exports = ReleaseDate;
