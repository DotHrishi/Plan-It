import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB !");
        process.exit();
    }
};

export default connection;