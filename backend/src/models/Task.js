import mongoose from 'mongoose';

const Tasks = mongoose.Schema(
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