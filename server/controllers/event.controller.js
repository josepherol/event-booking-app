import Event from "../models/event.model.js";
import User from "../models/user.model.js";

export const createEvent = async (req, res) => {
  try {
    const { title, description, date, location, category } = req.body;
    let { coverImg, eventImgs, coverVid } = req.body;
    const userId = req.user._id.toString();

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found!" });

    if (!title) {
      return res.status(400).json({ message: "Title is required!" });
    }
    if (!description) {
      return res.status(400).json({ message: "Description is required!" });
    }
    if (!date) {
      return res.status(400).json({ message: "Date is required!" });
    }
    if (!location.adress) {
      return res.status(400).json({ message: "Address is required!" });
    }
    if (!location.city) {
      return res.status(400).json({ message: "City is required!" });
    }
    if (!location.country) {
      return res.status(400).json({ message: "Country is required!" });
    }
    if (!category) {
      return res.status(400).json({ message: "Category is required!" });
    }

    const event = new Event({
      title,
      description,
      userId,
      date,
      location,
      category,
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateEvent = async (req, res) => {
  // const { fullName, email, username, currentPassword, newPassword, bio, link } = req.body;
  // let { profileImg, coverImg } = req.body;
  // const userId = req.user._id;
  // try {
  // 	let user = await User.findById(userId);
  // 	if (!user) return res.status(404).json({ message: "User not found" });
  // 	if ((!newPassword && currentPassword) || (!currentPassword && newPassword)) {
  // 		return res.status(400).json({ error: "Please provide both current password and new password" });
  // 	}
  // 	if (currentPassword && newPassword) {
  // 		const isMatch = await bcrypt.compare(currentPassword, user.password);
  // 		if (!isMatch) return res.status(400).json({ error: "Current password is incorrect" });
  // 		if (newPassword.length < 6) {
  // 			return res.status(400).json({ error: "Password must be at least 6 characters long" });
  // 		}
  // 		const salt = await bcrypt.genSalt(10);
  // 		user.password = await bcrypt.hash(newPassword, salt);
  // 	}
  // 	if (profileImg) {
  // 		if (user.profileImg) {
  // 			// https://res.cloudinary.com/dyfqon1v6/image/upload/v1712997552/zmxorcxexpdbh8r0bkjb.png
  // 			await cloudinary.uploader.destroy(user.profileImg.split("/").pop().split(".")[0]);
  // 		}
  // 		const uploadedResponse = await cloudinary.uploader.upload(profileImg);
  // 		profileImg = uploadedResponse.secure_url;
  // 	}
  // 	if (coverImg) {
  // 		if (user.coverImg) {
  // 			await cloudinary.uploader.destroy(user.coverImg.split("/").pop().split(".")[0]);
  // 		}
  // 		const uploadedResponse = await cloudinary.uploader.upload(coverImg);
  // 		coverImg = uploadedResponse.secure_url;
  // 	}
  // 	user.fullName = fullName || user.fullName;
  // 	user.email = email || user.email;
  // 	user.username = username || user.username;
  // 	user.bio = bio || user.bio;
  // 	user.link = link || user.link;
  // 	user.profileImg = profileImg || user.profileImg;
  // 	user.coverImg = coverImg || user.coverImg;
  // 	user = await user.save();
  // 	// password should be null in response
  // 	user.password = null;
  // 	return res.status(200).json(user);
  // } catch (error) {
  // 	console.log("Error in updateUser: ", error.message);
  // 	res.status(500).json({ error: error.message });
  // }
};

export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    if (event.userId.toString() !== req.user._id.toString()) {
      return res
        .status(401)
        .json({ error: "You are not authorized to delete this event" });
    }

    await Event.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.log("Error in deleteEvent controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

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

export const filterEvents = async (req, res) => {
  //   try {
  //     const { title, category, location, date, tags, logic } = req.query;
  //     // Build the filter query dynamically
  //     const filters = [];
  //     if (title) filters.push({ title: { $regex: title, $options: "i" } }); // Case-insensitive search
  //     if (category) filters.push({ category });
  //     if (location)
  //       filters.push({ "location.city": { $regex: location, $options: "i" } });
  //     if (date) filters.push({ date: new Date(date) });
  //     if (tags) {
  //       const tagsArray = tags.split(","); // Assume tags are comma-separated
  //       filters.push({ tags: { $in: tagsArray } });
  //     }
  //     // Apply AND (default) or OR logic based on the `logic` parameter
  //     const query = logic === "OR" ? { $or: filters } : { $and: filters };
  //     // Find events matching the query
  //     const events = await Event.find({
  //       isDeleted: false,
  //       isActive: true,
  //       ...query,
  //     });
  //     res.status(200).json({ success: true, events });
  //   } catch (error) {
  //     res.status(500).json({ success: false, message: error.message });
  //   }
};
