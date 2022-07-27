const Mongoose = require("mongoose");
let blogSchema = Mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
}) 

let blogModel = Mongoose.model("blogs",blogSchema);


module.exports = blogModel;