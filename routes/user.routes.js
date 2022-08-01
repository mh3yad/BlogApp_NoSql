const app =  require("express").Router();

let userController = require("../controllers/user.controller")
let Validator = require('../helpers/validator');
let {addUserValidation} = require('../validation/user.validation');


app.post("/addNewUser",Validator(addUserValidation),userController.addNewUser);
app.get("/",userController.getAllUsers);
app.get("/getUserById/:id",userController.getUserById);
app.post("/updateUser/:id",userController.updateUser);
app.get("/deleteUser/:id",userController.deleteUser);
app.get("/getUserBlogs/:id",userController.getUserBlogs);
app.post("/comparePassword",userController.comparePassword);

module.exports = app;