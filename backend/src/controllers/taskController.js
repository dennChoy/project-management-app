import {
    addNewTaskToProjectService,
    getAllTasksByProjectService,
    deleteTaskByIdService
} from "../models/taskModel.js";

const handleResponse = (res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data
    });
}

export const addNewTask = async (req, res, next) => {
    const {projectId, task} = req.body;
    try {
        const newTask = await addNewTaskToProjectService(projectId, task); 
        handleResponse(res, 201, "Task added successfully", newTask);
    }catch(err){
        next(err);
    }
}

export const getAllProjectTasks = async (req, res, next) => {
    const {projectId} = req.body;
    try{
        const tasks = await getAllTasksByProjectService(projectId);
        handleResponse(res, 200, "Tasks fetched successfully", tasks)
    }catch(err){
        next(err);
    }
}

export const deleteTaskProject = async (req, res, next) => {
    projectId = req.params.id;
    try {
        const task = await deleteTaskByIdService(projectId);
        handleResponse(res, 200, "Task deleted successfully", task);
    } catch(err) {
        next(err);
    }
}