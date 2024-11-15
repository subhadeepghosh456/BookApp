const mongoose = require("mongoose");
// PChGJNHKqcFtH6E3
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://srsubhadeepghosh456:PChGJNHKqcFtH6E3@cluster0.wpwl9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
};

module.exports = connectDB;
