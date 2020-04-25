const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gamePlatformSchema = new Schema({
    name: { type: String, required: true },
    gameId: { type: mongoose.Types.ObjectId}

});

const GamePlatform = mongoose.model("GamePlatform", gamePlatformSchema);

module.exports = GamePlatform;
