let Mogoose = require("mongoose");
let bcrypt = require("bcrypt");
let salt_round = 2;
let joi = require("joi");
const { bool } = require("joi");

let userSchema = Mogoose.Schema({
    username:{type:String, required:true},
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    phone:{type:String, required:true},
    age:{type:Number, required:true},
    isActive:{type:Boolean, required:true},
    userBlogs:[{
        type:Array,
        refs:"blogs"
    }]
})

userSchema.pre("save",async  function (next)  {
    console.log(this.password);
    this.password = await bcrypt.hash(this.password,salt_round);
    next();
})

let userModel = Mogoose.model("users",userSchema);

module.exports = userModel;