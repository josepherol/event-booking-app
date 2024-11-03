import express from "express";
import { profile, events, books, update } from "../controllers/user.controller.js";
import { checkAuth } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/profile/:username", checkAuth, profile);
router.get("/events", checkAuth, events);
router.get("/books", checkAuth, books);

router.post("/update", checkAuth, update);

export default router;
