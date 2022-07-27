let express =  require("express")
const app = express();
let blogRoutes = require("./routes/blog.routes");
let userRoutes = require("./routes/user.routes");
let connection = require("./model/connection");
connection();

app.use(express.json())
app.use(userRoutes);
app.use(blogRoutes);
  


app.listen(8080,() => console.log("running "));