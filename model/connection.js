const Mongoose = require('mongoose');
const dburl = "mongodb://localhost:27017/blog";
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