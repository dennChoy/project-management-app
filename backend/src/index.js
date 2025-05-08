import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import errorHandling from './middelware/errorHandler.js';
import projectRoutes from './routes/projectRoutes.js';
import {createProjectTable, createTaskTable} from './data/createProjectTable.js';

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", projectRoutes);

//Error handling middleware
app.use(errorHandling);

createProjectTable();
createTaskTable();

//Server running
app.listen(port, () => {
    console.log(`Server runing ${port}`);
})
