import express from "express";
import { getAllTasks, getTaskById, createNewTask, updateTask, deleteTaskById } from "../controllers/taskControllers.js";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.post("/", createNewTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTaskById);

export default router;