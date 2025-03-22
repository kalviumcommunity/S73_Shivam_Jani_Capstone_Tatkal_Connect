const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");


connectDB();
const PORT = process.env.PORT
const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});