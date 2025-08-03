import mongoose from 'mongoose';

const Tasks = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }    
);

const Task=mongoose.model("Tasks", Tasks);

export default Task;