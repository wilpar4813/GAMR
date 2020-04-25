const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const platformNameSchema = new Schema({
    name: { type: String },
    releaseDateId: { type: mongoose.Types.ObjectId}
});

const PlatformName = mongoose.model("PlatformName", platformNameSchema);

module.exports = PlatformName;
