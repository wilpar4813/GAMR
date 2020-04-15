const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const releaseDateSchema = new Schema ({
    date: { type: Date }, 
});

const ReleaseDate = mongoose.model("ReleaseDate", releaseDateSchema);

module.exports = ReleaseDate;
