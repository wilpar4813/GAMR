const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const platformLogoSchema = new Schema({
    image_id: { type: String },
    height: { type: Number },
    width: { type: Number },
    gameId: { type: mongoose.Types.ObjectId},
    platformId: { type: mongoose.Types.ObjectId}
});

const PlatformLogo = mongoose.model("PlatformLogo", platformLogoSchema);

module.exports = PlatformLogo;
