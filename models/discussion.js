const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const DiscussionSchema = new Schema ({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
})

const Discussion = mongoose.model("Discussion", DiscussionSchema);

module.exports = Discussion;