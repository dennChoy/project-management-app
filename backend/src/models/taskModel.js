import pool from "../config/db.js";

export const getAllTasksByProjectService = async (projectId) => {
    const result = await pool.query("SELECT * FROM tasks WHERE project_id = $1", [projectId]);
    return result.rows;
}

export const addNewTaskToProjectService = async (projectId, task) => {
    const result = await pool.query("INSERT INTO tasks (project_id, task) VALUES ($1, $2) RETURNING *", [projectId, task]);
    return result.rows[0];
}

export const deleteTaskByIdService = async (taskId) => {
    const result = await pool.query("DELETE FROM tasks WHERE id = $1", [taskId]);
    return result.rows[0];
}