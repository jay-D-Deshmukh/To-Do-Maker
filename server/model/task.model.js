import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});

const Task = mongoose.model('Task',taskSchema)
export default Task;
