import pool from "../config/db.js";

export const getAllProjectsService = async () => {
    const result = await pool.query("SELECT * FROM project");
    return result.rows;
}

export const getProjectByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM project WHERE id = $1", [id]);
    //console.log(result.rows[0]);
    return result.rows[0];
}

export const createProjectService = async (title, description, dueDate) => {
    const result = await pool.query("INSERT INTO project (title, description, duedate) VALUES ($1, $2, $3) RETURNING *", 
        [title, description, dueDate]);
    return result.rows[0];
}

export const updateProjectService = async (id, title, description, dueDate) => {
    const result = await pool.query("UPDATE project SET title=$1, description=$2, dueDate=$3 WHERE id=$4 RETURNING *",
        [title, description, dueDate, id]
    );
    return result.rows[0];
}

export const deleteProjectService = async (id) => {
    const result = await pool.query("DELETE FROM project WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
}