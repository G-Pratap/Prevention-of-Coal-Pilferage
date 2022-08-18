const mongoose = require("mongoose");
const db = process.env.DATABASE;

console.log(db);

mongoose
    .connect(db)
    .then((resp) => {
        console.log(resp);
        console.log("Connection Successful");
    })
    .catch((e) => {
        console.log(e);
        console.log("Connection Unsuccessful");
    });