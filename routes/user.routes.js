const app =  require("express").Router();

let userController = require("../controllers/user.controller")

app.post("/addNewUser",userController.addNewUser);
app.get("/",userController.getAllUsers);
app.get("/getUserById/:id",userController.getUserById);
app.post("/updateUser/:id",userController.updateUser);
app.get("/deleteUser/:id",userController.deleteUser);
app.get("/getUserBlogs/:id",userController.getUserBlogs);

module.exports = app;