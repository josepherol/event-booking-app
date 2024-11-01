import express from "express";
import {
  verifyUser,
  me,
  register,
  login,
  logout,
} from "../controllers/auth.controller.js";
import { checkAuth, checkAdmin } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/verifyUser", verifyUser);
router.get("/me", checkAuth, me);

router.post("/register", register);
router.post("/login", login);
router.post("/logout", checkAuth, logout);

export default router;
