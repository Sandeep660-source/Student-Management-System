
const mongoose = require("mongoose");

async function ConnectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://kssandeep8007_db_user:8Xw5YOfmLxgcN6oY@studentmanagement.xauktbj.mongodb.net/?appName=StudentManagement"
    );
    console.log("Connected Mongodb");
  } catch (error) {
    console.log("Error Connecting to Mongodb", error);
  }
}

module.exports = ConnectDB;