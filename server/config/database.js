const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("An error ocurred while connecting to MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
