import express from "express";
import {
  allEvents,
  filterEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller.js";
import { checkAuth, checkAdmin } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/allEvents", checkAdmin, allEvents);
router.get("/filterEvents", checkAuth, filterEvents);

router.post("/createEvent", checkAuth, createEvent);
router.put("/updateEvent/:eventId", checkAuth, updateEvent);
router.delete("/deleteEvent/:eventId", checkAuth, deleteEvent);

export default router;
