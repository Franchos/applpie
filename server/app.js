const express = require("express");
const routes = require("./routes");
const connectDB = require("../server/config/database");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", routes);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
