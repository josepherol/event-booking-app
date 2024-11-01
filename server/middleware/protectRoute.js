import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const checkAuth = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken; // access token
    const refreshToken = req.cookies.refreshToken; // refresh token

    if (!accessToken && !refreshToken) {
      return res.status(401).json({ error: "No tokens provided!" });
    }

    // Step 1: Verify Access Token
    let decodedAccessToken;
    if (accessToken) {
      try {
        decodedAccessToken = jwt.verify(accessToken, process.env.JWT_SECRET);
      } catch (error) {
        if (error.name === "TokenExpiredError") {
          console.log(
            "Access token expired. Attempting to use refresh token..."
          );
        } else {
          return res.status(401).json({ error: "Invalid Access Token!" });
        }
      }
    }

    // Step 2: If Access Token is valid, proceed
    if (decodedAccessToken) {
      const user = await User.findById(decodedAccessToken.userId).select(
        "-password"
      );
      req.user = user;
      return next();
    }

    // Step 3: Verify Refresh Token if Access Token is expired or missing
    try {
      const decodedRefreshToken = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET
      );

      // Step 4: Find user by ID in decoded refresh token
      const user = await User.findById(decodedRefreshToken.userId).select(
        "-password"
      );

      if (!user) {
        return res.status(401).json({ error: "User not found!" });
      }

      // Step 5: Generate a new access token
      const newAccessToken = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "15m", // Set a short expiration time for security
        }
      );

      // Set the new access token in the cookie
      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
        maxAge: 15 * 60 * 1000, // 15 minutes in milliseconds
      });

      req.user = user; // Attach user to request
      return next();
    } catch (error) {
      return res.status(401).json({ error: "Invalid Refresh Token!" });
    }
  } catch (error) {
    console.log("Error in checkAuth middleware: ", error.message);
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const checkAdmin = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return res.status(401).json({ error: "Access token missing!" });
    }

    // Verify the access token
    const decodedAccessToken = jwt.verify(accessToken, process.env.JWT_SECRET);

    // Fetch user from database using decoded token info
    const user = await User.findById(decodedAccessToken.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    // Check if user role is admin
    if (user.role !== "admin") {
      return res.status(403).json({ error: "Access denied! Admins only." });
    }

    // Attach user to request object and proceed to next middleware
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in checkAdmin middleware: ", error.message);
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};
