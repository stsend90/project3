const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const DiscussionSchema = new Schema ({
    title: {
        type:String,
        required:true,
        unique:true
    },
    body: {
        type:String,
        required:true,
        unique:true
    },
    date: {
        type: String,
        default: Date.now()
    }
})

const Discussion = mongoose.model("Discussion", DiscussionSchema);

module.exports = Discussion;