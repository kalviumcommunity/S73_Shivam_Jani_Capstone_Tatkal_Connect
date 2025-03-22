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

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Excluding password field
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to fetch users", error: error.message });
  }
});

// Update user details
router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract user ID from URL
    const { name, email, role } = req.body; // Extract updated fields from request body

    // Check if user exists
    let user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update only if new values are provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (role) user.role = role;

    // Save updated user
    await user.save();

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to update user", error: error.message });
  }
});

module.exports = router;
