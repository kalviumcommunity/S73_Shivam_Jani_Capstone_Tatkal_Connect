const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app = express();
const cors = require("cors"); //Here, we import the cors package and use it as middleware in our Express app
app.use(cors({ origin: "http://localhost:5173", credentials: true })); //this frontend can access the backend API.
app.use(express.json());
app.use("/api/auth", authRoutes);

connectDB();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
