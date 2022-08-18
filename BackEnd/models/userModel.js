const mongoose = require("mongoose");
mongoose.pluralize(null);

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: false
    }
});
module.exports = mongoose.model('userNameData', userSchema);

