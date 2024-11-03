import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import eventRoutes from "./routes/event.routes.js";

import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json({ limit: "500kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);

app.get("/", (req, res) => {
  res.send("Event App, Yeey!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.clear();
  console.log(`Server is running on http://localhost:${PORT}/`);
  connectMongoDB();
});
