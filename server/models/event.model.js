import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User who created the event
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000,
  },
  date: {
    type: Date,
    required: true,
  },
  coverImg: {
    type: String,
    default: "",
  },
  eventImgs: {
    type: [String],
    default: [],
  },
  coverVid: {
    type: String,
    default: "",
  },
  location: {
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    city: {
      type: String,
      required: true,
      maxlength: 50,
    },
    country: {
      type: String,
      required: true,
      maxlength: 50,
      default: "TR",
    },
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to users attending the event
      default: [],
    },
  ],
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  isOutdated: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// Automatically set `isOutdated` to `true` if the event date has passed
eventSchema.pre("save", function (next) {
  this.updatedAt = Date.now();

  // Check if the event date has passed
  if (this.date < new Date()) {
    this.isActive = true;
  }

  next();
});

// This middleware also ensures `isOutdated` updates on document updates
eventSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();
  if (update.date && update.date < new Date()) {
    update.isOutdated = true;
  }

  update.updatedAt = Date.now();
  next();
});

export default mongoose.model("Event", eventSchema);
