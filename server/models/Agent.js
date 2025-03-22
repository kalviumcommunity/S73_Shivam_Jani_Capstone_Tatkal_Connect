const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: Number, required: true }, // Years of experience
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Agent", AgentSchema);
