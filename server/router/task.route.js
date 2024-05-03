import express from 'express'
import { createTask } from '../controllers/task.comtroller'

const route = express.Router()

route.get('/createtask',createTask)