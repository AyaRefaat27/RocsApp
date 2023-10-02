import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../Controllers/userControllers.js";
import { verifyAdmin, verifyUser } from "../Utils/verifyToken.js";

const router = express.Router();

// Create New User
router.post("/", verifyAdmin, createUser);
// Update User
router.put("/:id", verifyUser, updateUser);

// Delete User
router.delete("/:id", verifyUser, deleteUser);

// Get Single User
router.get("/:id", verifyUser, getSingleUser);

// Get All User
router.get("/", verifyAdmin, getAllUsers);

export default router;
