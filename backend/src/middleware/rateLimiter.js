import RateLimit from "express-rate-limit";
import MongoStore from "rate-limit-mongo";
import dotenv from "dotenv";

dotenv.config();

const limiter = RateLimit({
    store: new MongoStore({
        uri: process.env.MONGODB_URI,
        collectionName: "rateLimit",
        expireTimeMs: 15*60*1000,
        errorHandler: console.error.bind(null, "rate-limit-mongo")
    }),
    max:2000,
    windowMs: 15*60*1000
});

export default limiter;