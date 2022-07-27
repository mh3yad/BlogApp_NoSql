let Blog = require("../model/blog.model");
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

let addNewBlog =  (async (req,res)=> {
        let blog =  new Blog(req.body);
        await blog.save();
        await User.findByIdAndUpdate({_id:req.params.userId},{$push:{userBlogs:blog._id}})
        res.status(200).json({"message":"Blog created successfully"});
})

let updateBlog = ( async (req,res) => {
    let _id = req.params.id;
    let {title,description} = req.body;
    let blog = await Blog.findByIdAndUpdate({_id},{title,description});
    res.status(200).json({"message":"Blog updated successfully","Blog":blog});
})

let getAllBlogs =  ( async (req,res) => {
    let allBlogs =  await Blog.find({});
    res.status(200).json({"message":"success","Blogs":allBlogs})
})

let getBlogById = ( async(req,res) => {
    let _id = req.params.id;
    let blog = await Blog.findById(_id);
        res.status(200).json({"message":"success","Blog":blog});
})

let deleteBlog = (async(req,res) => {
    let blogId = req.params.blogId;
    let userId = req.params.userId;
    await Blog.findByIdAndRemove({_id:blogId});
    await User.findByIdAndUpdate({_id:userId},{$pull:{userBlogs:blogId}})
    res.status(200).json({"message":"Blog deleted successfully"});
})
    
let getAllBlogsPaginated = (async (req,res) => {
    let {size,page} = req.query;
    size = parseInt(size);
    page = parseInt(page);
    let skipped_items = (page-1) *size ;
    let blogs = await Blog.find({}).limit(size).skip(skipped_items);
    res.status(200).json({"message":"success",blogs});

})

module.exports = 
{
    addNewBlog,
    updateBlog,
    getAllBlogs,
    getBlogById,
    deleteBlog,
    getAllBlogsPaginated

}