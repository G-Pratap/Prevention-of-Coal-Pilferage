const mongoose = require("mongoose");
mongoose.pluralize(null);

var mineVendorAssociationSchema = new mongoose.Schema({
    mineID: {
        type: String,
        required: true
    },
    vendorID: {
        type: String,
        required: true
    },
    isActive: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model('mineVendorAssociation', mineVendorAssociationSchema);