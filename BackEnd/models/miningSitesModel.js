const mongoose = require("mongoose");
mongoose.pluralize(null);

var miningSiteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    appointedManager: {
        type: String,
        required: true
    },
    mineID: {
        type: String,
        required: true
    },
    orgID: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('miningSites', miningSiteSchema);