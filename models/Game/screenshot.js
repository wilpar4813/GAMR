const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;

const screenshotSchema = new Schema ({
    image_id: { type: String },
    height: { type: Number },
    width: { type: Number },
    gameId: { type: mongoose.Types.ObjectId }
})

const Screenshot = mongoose.model("Screenshot", screenshotSchema);
 
module.exports = Screenshot;
