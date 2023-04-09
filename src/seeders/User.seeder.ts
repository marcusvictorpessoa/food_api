import User from "../models/User.models";
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();
const DB_PATH = process.env.DB_PATH || '';

const users = [
    {
        name: "admin",
        email: "admin@foodapi.com",
        password: 1234
    },
];

//connect mongoose
mongoose
    .connect(DB_PATH)
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    })
    .then(() => {
        console.log("connected to db in development environment");
    });

const createAdmins = async () => {
    await User.insertMany(users);
    mongoose.disconnect();
    console.log("Users created!");
};

createAdmins();
