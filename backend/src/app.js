import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import router from './routes/user.routes.js'; // adjust the path if needed
import dotenv from 'dotenv';
import errorMiddleware from './middlewares/error.middleware.js';

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// CORS configuration
const allowedOrigins = [process.env.CORS_ORIGIN];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// Routes
app.use('/api', router);
app.use(errorMiddleware);

export default app;
