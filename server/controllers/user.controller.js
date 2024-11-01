import User from "../models/user.model.js";
import Event from "../models/event.model.js";

export const profile = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username }).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Internal Server Error!");
  }
};

export const events = async (req, res) => {
  try {
    const userId = req.user._id;

    const eventIds = await User.findById(userId).select("events");

    if (!eventIds) {
      return res.status(404).json({ message: "No Events Created!" });
    }

    const events = await Event.find({ _id: { $in: eventIds } });

    res.status(200).json({ events });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Internal Server Error!");
  }
};

export const books = async (req, res) => {
  try {
    const userId = req.user._id;

    const bookIds = await User.findById(userId).select("books");

    if (!bookIds) {
      return res.status(404).json({ message: "No books Created!" });
    }

    const books = await Event.find({ _id: { $in: bookIds } });

    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Internal Server Error!");
  }
};

export const update = async (req, res) => {};
