require("dotenv").config();
const express =  require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service.router");
const adminRoute = require("./router/admin-router");
const admincontact = require("./router/admin-router");
  

const corsOptions = {
  //apana frontend ka url
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};


app.use(cors(corsOptions));
app.use(express.json());



app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
//admin route create karr raha hu
app.use("/api/admin", adminRoute);
app.use("/api/admin", admincontact);


app.use(errorMiddleware);

const PORT =5000;
//mera connection data base ka sath hota ha tabhi iss aplication start karo
connectDb().then(() =>{
app.listen(PORT,()=>{
console.log(`server is running at port: ${PORT}`);
});
});