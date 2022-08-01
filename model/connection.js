const Mongoose = require('mongoose');
require("dotenv").config();
const dburl = process.env.SERVER_STRING;
const connection = () => {
  return Mongoose.connect(dburl,
    {useNewUrlParser:true,useUnifiedTopology:true}
    ).then(() => {
      console.log("connected successfully");
    }).catch((err) => {
      console.log("connection error "+err);
    })
}


module.exports = connection;