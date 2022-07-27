const app =  require("express").Router();

let blogController = require("../controllers/blog.controller")

app.get("/getAllBlogs",blogController.getAllBlogs);
app.get("/getBlogById/:id",blogController.getBlogById);
app.post("/addNewBlog/:userId",blogController.addNewBlog);
app.post("/updateBlog/:id",blogController.updateBlog);
app.post("/deleteBlog/:blogId/:userId",blogController.deleteBlog);
app.get("/getAllBlogsPaginated",blogController.getAllBlogsPaginated);

module.exports = app;