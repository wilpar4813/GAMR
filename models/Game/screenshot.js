const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;

const screenshotSchema = new Schema ({
    url: { type: String },
    gameId: { type: mongoose.Types.ObjectId }
})

const Screenshot = mongoose.model("Screenshot", screenshotSchema);
 
module.exports = Screenshot;
