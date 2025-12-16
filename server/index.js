require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utilities/db");
const cors = require("cors");
const serviceRoute = require("../server/router/service-router")
app.use(express.json());//MIDDLEWARE
const adminRoute = require("../server/router/admin-router")
const contactRoute = require("../server/router/Contact-router")
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));
app.use("/api/auth", router);
app.use("/api/data", serviceRoute);
app.use("/api/data", contactRoute);
app.use("/api/admin", adminRoute);
// app.use("/api/data", serviceRoute);





// app.get("/", (req, res) => {
//     res.status(200).send("jai shree ram");
// });
// app.get("/register", (req, res) => {
//     res.status(200).send("Registration");
// });
connectDB().then(() => {


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
});
