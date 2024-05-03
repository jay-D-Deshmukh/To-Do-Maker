import Task from "../model/task.model.js";

export const createTask= async(req, res)=>{
     const task = req.body;
     try {
        const newTask = await Task.create(task)
        res.status(200).json({message:"task created"})
     } catch (error) {
        res.status(400).json({message:error.message})
     }
}

export const getTasks =async(req,res)=>{
    const { status } = req.query;
    try {
        const tasks = await Task.find()
        res.status(200).json({state:status}).populate('assignedTo', 'username');
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}