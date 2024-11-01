import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    role: {
      type: String,
      required: true,
      enum: ["guest", "admin"],
      default: "guest",
    },
    events: [
      // Created Events
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Events",
        default: [],
      },
    ],
    books: [
      // Booked Events
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Events",
        default: [],
      },
    ],
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
