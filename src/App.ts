import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import routes from './routes';
import initializeEnvVars from './environment';

dotenv.config();

const DB_PATH: string = process.env.DB_PATH!;
const SECRET: string = process.env.SECRET!;
const PORT: string = process.env.PORT!;
const TOKEN_EXPIRATION: string = process.env.TOKEN_EXPIRATION!;

const env = initializeEnvVars(PORT, DB_PATH, SECRET, TOKEN_EXPIRATION);

const app = express();

mongoose.connect(env.DB_PATH);

app.use(express.json());
app.use(routes);

export default app;
