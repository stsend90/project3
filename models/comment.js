const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CommentSchema = new Schema ({
    body: {
        type:String,
        required:true,
        unique:true
    },
    created: { type: Date, required: true, default: Date.now() },

})

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;