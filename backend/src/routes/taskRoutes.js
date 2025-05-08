import express from "express";
import {
    getAllProjectTasks,
    deleteTaskProject,
    addNewTask
 } from "../controllers/taskController.js";

const router = express.Router();

router.post("/task", addNewTask);
router.get("/task", getAllProjectTasks);
router.delete("/task/:id", deleteTaskProject);

export default router;