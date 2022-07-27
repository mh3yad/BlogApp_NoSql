let Mogoose = require("mongoose");
let userSchema = Mogoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    userBlogs:[{
        type:Mogoose.Types.ObjectId,
        refs:"blogs"
    }]
})

let userModel = Mogoose.model("users",userSchema);

module.exports = userModel;