const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    id: Schema.Types.ObjectId,
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    created: { type: Date, required: true, default: Date.now() },
    
    discussion: [{
        type: Schema.Types.ObjectId,
        ref: "Discussion"
    }],

    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],

    article: [{
        type: Schema.Types.ObjectId,
        ref: "Articles"
    }]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);