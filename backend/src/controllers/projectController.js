import {
    createProjectService,
    getAllProjectsService,
    getProjectByIdService,
    updateProjectService,
    deleteProjectService
} from '../models/projectModel.js';

const handleResponse = (res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data
    });
};

export const createProject = async (req, res, next) => {
    const {title, description, dueDate} = req.body;
    try {
        const newProject = await createProjectService(title, description, dueDate);
        handleResponse(res, 201, "Project created successfully", newProject);
    } catch(err){
        next(err);
    }
}

export const getAllProjects = async (req, res, next) => {
    try {
        const projects = await getAllProjectsService();
        handleResponse(res, 200, "Projects fetched successfully", projects);
    }catch(err){
        next(err);
    }
}

export const getProjectById = async (req, res, next) => {
    const projectId = req.params.id;
    try {
        const project = await getProjectByIdService(projectId);
        if(!project) return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "Users fetched successfully", project)
    } catch(err){
        next(err);
    }
}

export const updateProject = async (req, res, next) => {
    const projectId = req.params.id;
    const {title, description, dueDate} = req.body;
    try{
        const updatedProject = await updateProjectService(projectId, title, description, dueDate);
        if(!updatedProject) return handleResponse(res, 404, "Project not found");
        handleResponse(res, 200, "Project updated successfully", updatedProject); 
    }catch(err){
        next(err);
    }
}

export const deleteProject = async (req, res, next) => {
    const projectId = req.params.id;
    try {
        const deletedProject = await deleteProjectService(projectId);
        if(deletedProject) return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "Project deleted successfully")
    }catch(err){
        next(err);
    }
}