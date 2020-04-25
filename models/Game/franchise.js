const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const franchiseSchema = new Schema({
    name: { type: String },
    gameId: { type: mongoose.Types.ObjectId}
})

const Franchise = mongoose.model("Franchise", franchiseSchema);

module.exports = Franchise;

