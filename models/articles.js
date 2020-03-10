const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ArticleSchema = new Schema ({
    title: {
        type: String,
       
    },
    url: {
        type:String,
        
    },
    
    
    created: { type: Date, required: true, default: Date.now() },

})

const Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;