const mongoose = require("mongoose");
mongoose.pluralize(null);

var transportationVendorSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    ownersName: {
        type: String,
        required: true
    },
    companyAddress: {
        type: String,
        required: true
    },
    contactDetails: {
        type: String,
        required: true
    },
    vendorID: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model('transportationVendors', transportationVendorSchema);