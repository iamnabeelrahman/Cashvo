const mongoose = require("mongoose");
const DB_NAME = "cashvo";
require("dotenv").config();

const dbconnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDb connected!! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection error....!", error);
  }
};

module.exports = dbconnect;
