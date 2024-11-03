import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    reqired: true,
  },
  bgImg: {
    type: String,
    required: true,
  },
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      default: [],
    },
  ],
});

export default mongoose.model("Category", categorySchema);
