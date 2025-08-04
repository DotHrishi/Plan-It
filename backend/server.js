import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./src/routes/taskRoutes.js";
import rateLimiter from "./src/middleware/rateLimiter.js";
import bodyParser from "body-parser";
import path from "path";
import connection from "./src/config/db.js";
import limiter from "./src/middleware/rateLimiter.js";

const app=express();

dotenv.config();

const PORT=process.env.PORT || 3000;
const __dirname = path.resolve();

//MIDDLEWARES
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(limiter);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(rateLimiter);

app.use((req,res,next)=>{
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});

app.use("/api/tasks", taskRoutes);

connection().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}`);
    });
});