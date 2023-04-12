import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from "./routes/users.routes"


const app = express();

app.use(morgan('dev'));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json())

app.use(userRoutes);

export default app;