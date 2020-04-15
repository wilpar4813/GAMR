const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coverSchema = new Schema({
    image_id: { type: String },
    height: { type: Number },
    width: { type: Number }
});

const Cover = mongoose.model("Cover", coverSchema);

module.exports = Cover;

