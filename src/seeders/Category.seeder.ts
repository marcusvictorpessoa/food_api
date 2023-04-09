import Category from "../models/Category.models";
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();
const DB_PATH = process.env.DB_PATH || '';

const categories = [
    {
        name: "Brasileiras",
        parent: null
    },
    {
        name: "Bebidas",
        parent: null
    },
    {
        name: "Doces",
        parent: null
    },
    {
        name: "Salgados",
        parent: null
    },
    {
        name: "Vegetariana",
        parent: null
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

const createCategories = async () => {

    await Category.insertMany(categories);

    mongoose.disconnect();
    console.log("Categories created!");
};

createCategories();
