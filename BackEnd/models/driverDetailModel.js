const mongoose = require("mongoose");
mongoose.pluralize(null);

var driverDetailSchema = new mongoose.Schema({
    driverName: {
        type: String,
        required: true
    },
    drivingLicenseNumber: {
        type: String,
        required: true
    },
    aadharNumber: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    associatedVendorID: {
        type: String,
        required: true
    },
    associatedVehicleID: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model('driverDetail', driverDetailSchema);