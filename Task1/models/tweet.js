var mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    tweet: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tweet', tweetSchema);