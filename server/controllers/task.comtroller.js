import Task from "../model/task.model.js";

export const createTask= async(req, res)=>{
     const task = req.body;
     try {
        const newTask = await Task.create(task)
        res.status(2001).json({message:"task created"},newTask)
     } catch (error) {
        res.status(400).json({message:error.message})
     }
}