import { generateTokensAndSetCookies } from "../lib/utils/auth.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format!" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken!" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email is already taken!" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokensAndSetCookies(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      });
    } else {
      res.status(400).json({ error: "Invalid user data!" });
    }
  } catch (error) {
    console.log("Error in signup controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid password!" });
    }

    generateTokensAndSetCookies(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.log("Error in login controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("refreshToken", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.cookie("accessToken", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error in logout controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const me = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getMe controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return res.status(401).json({ error: "Access token missing!" });
    }

    // Verify the access token
    const decodedAccessToken = jwt.verify(accessToken, process.env.JWT_SECRET);

    // Find the user in the database
    const user = await User.findById(decodedAccessToken.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    const isAdmin = user.role === "admin";
    const isGuest = user.role === "guest";

    res.json({ isAdmin, isGuest });
  } catch (error) {
    console.log("Error in verifyUser controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// export const confirmEmail = async (req, res) => {};

// export const forgotPassword = async (req, res) => {};

// export const resetPassword = async (req, res) => {};
