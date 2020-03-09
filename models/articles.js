const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ArticleSchema = new Schema ({
    title: {
        type: String,
        unique:true
    },
    url: {
        type:String,
        unique:true
    },
    
    image: {
        type:String,
    },
    
    created: { type: Date, required: true, default: Date.now() },

})

const Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;