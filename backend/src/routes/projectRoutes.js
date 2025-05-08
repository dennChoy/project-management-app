import express from "express";
import {
    createProject,
    deleteProject, 
    getAllProjects,
    getProjectById,
    updateProject

 } from "../controllers/projectController.js";

 const router = express.Router();

 router.post("/project", createProject);
 router.get("/project", getAllProjects);
 router.get("/project/:id", getProjectById);
 router.put("/project/:id", updateProject);
 router.delete("/project", deleteProject);

 export default router;