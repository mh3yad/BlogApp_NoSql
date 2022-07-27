let User = require("../model/user.model");


/*----------------------*/
let censor = (censor) => {
    var i = 0;
    
    return function(key, value) {
      if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
        return '[Circular]'; 
      
      if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
        return '[Unknown]';
      
      ++i; // so we know we aren't using the original object anymore
      
      return value;  
    }
  }
  
/*----------------------*/

let addNewUser =  ((req,res)=> {
        let user =  new User(req.body);
        user.save();
        res.status(200).json({"message":"user created successfully"});
})

let updateUser = ( async (req,res) => {
    let _id = req.params.id;
    let {username,email,phone} = req.body;
    let user = await User.findByIdAndUpdate({_id},{username,email,phone});
    console.log(user);
    res.status(200).json({"message":"user updated successfully","user":user});
})

let getAllUsers =  ( async (req,res) => {
    let allUsers =  await User.find({});
    console.log(allUsers);
    res.status(200).json({"message":"success","users":allUsers})
})

let getUserById = ( async(req,res) => {
    let _id = req.params.id;
    let user = await User.findById(_id);
        res.status(200).json({"message":"success","user":user});
})

let deleteUser = (async(req,res) => {
    let _id = req.params.id;
    await User.findByIdAndRemove({_id});
    res.status(200).json({"message":"user deleted successfully"});
})

let getUserBlogs = (async(req,res) => {
    let _id = req.params.id;
    let userBlogs = await User.findById({_id}).populate("userBlogs");
    res.status(200).json({message:"success",userBlogs:userBlogs.userBlogs});
})
    

module.exports = 
{
    addNewUser,
    updateUser,
    getAllUsers,
    getUserById,
    deleteUser,
    getUserBlogs

}