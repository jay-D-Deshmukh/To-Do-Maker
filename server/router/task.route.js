import express from 'express';
import { createTask, getTasks } from '../controllers/task.comtroller.js';

const route = express.Router();

route.post('/createtask',createTask);
route.get('/',getTasks)

export default route;