const express = require("express");
const app = express();

const cors = require("cors");
const { connectToMongoDB } = require("./connect");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

//MIDDLEWARES
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//CONNECT TO DATABASE
connectToMongoDB(process.env.MONGO_DB_URL).then(() =>
  console.log("Mongodb connected")
);

//ROUTES
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server started on ", PORT));
