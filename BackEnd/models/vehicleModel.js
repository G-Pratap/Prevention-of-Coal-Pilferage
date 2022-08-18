const mongoose = require("mongoose");
mongoose.pluralize(null);

var vehicleSchema = new mongoose.Schema({
    vehicleCompany: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    vehicleWeight: {
        type: String,
        required: true
    },
    vehicleCapacity: {
        type: String,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    vehicleID: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('vehicle', vehicleSchema);