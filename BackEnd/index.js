const express = require("express");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require("cors");
const app = express();
app.use(cors());

dotenv.config({ path: "./config.env" });

require("./db/connection");
const userRouter= require("./router/userRouter");
// const miningSiteRouter=require("./router/miningSiteRouter")
const PORT = 5000;

app.use(express.json());
// app.use(require("./apiCall"));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
app.use('/', userRouter)


// var storage = multer.memoryStorage({
//   destination: function (req, file, cb) {
//     cb(null, "/public");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage }).single("file");

// app.post("/upload", upload, (req, res) => {
//   console.log(req.files);
  
//   // upload(req, res, function (err) {
//   //   if (err instanceof multer.MulterError) {
//   //     return res.status(500).json(err);
//   //   } else if (err) {
//   //     return res.status(500).json(err);
//   //   }
//   //   return res.status(200).send(req.files);
  
//   // });
//    return res.status(200).json({message: "hello world"});
// })