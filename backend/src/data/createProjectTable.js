import pool from "../config/db.js";

export const createProjectTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS project (
            id SERIAL PRIMARY KEY, 
            title VARCHAR(100) NOT NULL,
            description VARCHAR(250) NOT NULL,
            duedate TIMESTAMP,
            created_at TIMESTAMP DEFAULT NOW()
        )
    `;

    try{
        pool.query(query);
        console.log('Project Table created if not exists');
    }catch(error) {
        console.log('Error creating projects table: ', error);
    }
}

export const createTaskTable = async () => {
    const query = `CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        project_id INT,
        task VARCHAR(250)
    )`;

    try {
        pool.query(query);
        console.log("Task table created if not exists");
    }catch(err){
        console.log("Error creating ")
    }
} 