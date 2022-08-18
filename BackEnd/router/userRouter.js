const userModel = require("../models/userModel");
const miningSitesModel = require("../models/miningSitesModel");
const mineVendorAssociationModel = require("../models/mineVendorAssociationModel");
const express = require("express");
const transportationVendorModel = require("../models/transportationVendorModel");
const driverDetailModel = require("../models/driverDetailModel");
const vehicleModel = require("../models/vehicleModel");
const router = express.Router();


router.post('/validateLogin', async (req, res) => {
    // console.log(req.body);
    // let name = req.body.username
    const user = await userModel.findOne({ username: req.body.username })
    // console.log(user)
    if (!user) {
        return res.status(401).send({ valid: 0, message: 'username not exist' });
    }
    if (req.body.password === user.password)
        return res.status(200).send({ valid: 1, userID: user.userID, message: 'successfully logged in' })
    else res.status(401).send({ valid: 0, message: 'user not found' })
})

router.get('/getVendorsFromMine', async (req, res) => {

    var vendorsMineMapping = await mineVendorAssociationModel.find({ mineID: req.query.mineID });

    let vendors = [];

    for (let i in vendorsMineMapping) {
        const data = await transportationVendorModel.findOne({ vendorID: vendorsMineMapping[i].vendorID });
        vendors.push(data);
    }

    // vendors = await mineVendorAssociationModel
    //     .aggregate([
    //         {
    //             $match: {
    //                 mineID: req.query.mineID,
    //             }
    //         },
    //         {
    //             $lookup: {
    //                 from: 'miningSites',
    //                 let: { mineID: "$mineID" },
    //                 pipeline: [
    //                     {
    //                         $match: {
    //                             $expr: { $eq: ["$mineID", "$$mineID"] },
    //                         },
    //                     },
    //                 ],
    //                 as: "miningSites",
    //             },
    //         },
    //     ])

    // console.log(vendors);
    // const miningSite = await miningSitesModel.find(vendors)
    if (!vendors)
        return res.status(404).send({ message: "ERROR!!" });
    else
        return res.status(200).send({ vendors: vendors });

})

router.get('/getDriversFromVendor', async (req, res) => {

    // var driversDetailArray = await mineVendorAssociationModel.find({ vendorID: req.query.vendorID });

    let drivers = await driverDetailModel.find({ associatedVendorID: req.query.vendorID });


    if (!drivers)
        return res.status(404).send({ message: "ERROR!!" });

    let driverWithVehicle = [];
    for (let i in drivers) {

        const data = await vehicleModel.findOne({ vehicleID: drivers[i].associatedVehicleID });
        driverWithVehicle.push({ driver: drivers[i], vehicle: data });

    }

    return res.status(200).send({ drivers: driverWithVehicle });
})

router.get('/getVehicleFromDriver', async (req, res) => {
    let vehicle = await vehicleModel.find({ vehicleID: req.query.associatedVehicleID });
    if (!vehicle)
        return res.status(404).send({ message: "ERROR!!" });

    return res.status(200).send({ vehicles: vehicle });
})

router.get('/getSitesFromUserID', async (req, res) => {
    var sites;
    sites = await userModel
        .aggregate([
            {
                $match: {
                    userID: req.query.userID,
                }
            },
            {
                $lookup: {
                    from: 'miningSites',
                    let: { orgID: "$orgID" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$orgID", "$$orgID"] },
                            },
                        },
                    ],
                    as: "sites",
                },
            },
        ])
    console.log(sites);
    // const miningSite = await miningSitesModel.find(vendors)
    if (!sites)
        return res.status(404).send({ message: "ERROR!!" });
    else
        return res.status(200).send({ sites: sites[0].sites });

})

module.exports = router