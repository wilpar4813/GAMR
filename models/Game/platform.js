const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const platformSchema = new Schema({
    name: { type: String, required: true },
    abbreviation: { type: String },
    platformLogos: [
        {
            type: Schema.Types.ObjectId,
            ref: "PlatformLogo",
        },
    ],
    
    gameId: { type: mongoose.Types.ObjectId}

     
});

const Platform = mongoose.model("Platform", platformSchema);

module.exports = Platform;
