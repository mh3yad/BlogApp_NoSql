let express =  require("express")
require('dotenv').config()
const app = express();
let blogRoutes = require("./routes/blog.routes");
let userRoutes = require("./routes/user.routes");
let connection = require("./model/connection");
connection();

app.use(express.json())
app.use(userRoutes);
app.use(blogRoutes);


app.listen(process.env.PORT,() => console.log(`running on port ${process.env.PORT}`));