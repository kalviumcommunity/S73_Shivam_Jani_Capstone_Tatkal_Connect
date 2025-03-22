const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password, role });
    await newUser.save();

    console.log({ newUser });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// **New route to get all users**
router.get("/users", async (req, res) => {
  //This defines a GET request at the endpoint /users.
  try {
    const users = await User.find({}, "-password"); // Excluding password field // retrieves all documents (users) from the User collection in MongoDB.
    res.status(200).json(users); // If the users are fetched successfully, we send a 200 (OK) response with the users' data in JSON format.
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to fetch users", error: error.message }); // If an error occurs (e.g., database connection fails), we send a 500 (Internal Server Error) response.
  }
});

module.exports = router;
