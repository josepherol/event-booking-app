import jwt from "jsonwebtoken";

export const generateTokensAndSetCookies = (userId, res) => {
  // Generate access token (expires in 15 minutes)
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15m", // 15 minutes
  });

  // Generate refresh token (expires in 7 days)
  const refreshToken = jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d", // 7 days
  });

  // Set access token in cookie
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  // Set refresh token in cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return { accessToken, refreshToken }; // Optionally return tokens if needed elsewhere
};
