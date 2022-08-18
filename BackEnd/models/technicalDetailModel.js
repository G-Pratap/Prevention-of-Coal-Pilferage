const mongoose = require("mongoose");
mongoose.pluralize(null);

var technicalDetailSchema = new mongoose.Schema({
    vehicleWeight: {
        type: Object,
        required: true
    },
    totalCoalWeight: {
        type: String,
        required: true
    },
    entryTime: {
        type: String,
        required: true
    },
    exitTime: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('technicalDetails', technicalDetailSchema);