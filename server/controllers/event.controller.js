import Event from "../models/event.model.js";

export const createEvent = async (req, res) => {};

export const updateEvent = async (req, res) => {};

export const deleteEvent = async (req, res) => {};

export const allEvents = async (req, res) => {
  try {
    const events = await Event.find({
      isDeleted: false,
      isActive: true,
      isOutdated: false,
    });

    res.status(200).json({ events });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in allEvents controller");
  }
};

export const filterEvents = async (req, res) => {};
