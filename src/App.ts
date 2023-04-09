import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import routes from './routes';

dotenv.config();
const DB_PATH = process.env.DB_PATH || '';

const app = express();

mongoose.connect(DB_PATH);

app.use(express.json());
app.use(routes);

export default app;
