import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();
const DB_PATH: string = process.env.DB_PATH || '';

const app = express();

mongoose.connect(DB_PATH);

app.use(express.json());

export default app;
