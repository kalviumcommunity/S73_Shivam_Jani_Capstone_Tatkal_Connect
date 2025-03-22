const mongoose = require("mongoose");

const BookingRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  trainNumber: { type: String, required: true },
  dateOfTravel: { type: Date, required: true },
  classType: {
    type: String,
    enum: ["Sleeper", "AC 3-Tier", "AC 2-Tier", "First Class"],
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BookingRequest", BookingRequestSchema);
