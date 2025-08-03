import Task from "../models/Task.js";

export async function getAllTasks(req,res) {
    try {
        const tasks= await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({message:"Failed to fetch tasks!"});
    }
}

export async function getTaskById(req,res) {
    try {
        const task=await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({message:"No tasks found!"});
        } else {
            res.status(200).json(task);
        }
    } catch (error) {
        res.status(500).json({message:"Failed to fetch task!"});
    }
}

export async function createNewTask(req, res) {
    try {
        const taskContent = req.body;
        const newTask = new Task(taskContent);
        await newTask.save();
        res.status(200).json(newTask);
    } catch (error) {
        console.error("Error in createNewTask:", error); // 👈 Add this
        res.status(500).json({ message: "Failed to create new task" });
    }
}


export async function updateTask (req,res) {
    try {
        const taskID = req.params.id;
        const updateContent = req.body;
        const updatedTask = await Task.findByIdAndUpdate(taskID, updateContent, { new: true });
        if (!updatedTask) {
            return res.status(404).json({message: "Task not found!"});
        } else {
            res.status(200).json(updatedTask);
        }
    } catch (error) {
        res.status(500).json({message: "Failed to update task!"});
    }
}

export async function deleteTaskById (req, res) {
    try {
        const taskID = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(taskID);
        if(!deletedTask) {
            return res.status(404).json({message: "Task not found!"});
        } else {
            res.status(200).json({message: "Task deleted successfully!"});
        }
    } catch (error) {
        res.status(500).json({message: "Failed to delete task!"});
    }
}