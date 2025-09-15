const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://127.0.0.1/profileDatabase"
    );
    console.log("Database Connected !");
  } catch (err) {
    console.log("Can't connect to database", err);
    process.exit(1);
  }
};

module.exports = connectDB;
