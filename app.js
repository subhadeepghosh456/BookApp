const express = require("express");
const connectDB = require("./database/DB");
const bookRouter = require("./routes/addBook");
const cors = require("cors");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 4000;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use("/", bookRouter);

connectDB().then(() => {
  console.log("DB Connected!");
  app.listen(port, () => {
    console.log("Server connected successfully!");
  });
});
