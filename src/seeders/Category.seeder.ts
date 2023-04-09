import Category from "../models/Category.models";
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const DB_PATH: string = process.env.DB_PATH!;


const parents = [
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

const categories = [
    {
        name: "Salgados Brasileiros",
        parent: ""
    },
    {
        name: "Doces Brasileiros",
        parent: ""
    }
]

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

    await Category.insertMany(parents);
    const categoryBrazil = await Category.findOne({ name: "Brasileiras" });
    categories.forEach((category) => {
        category.parent = categoryBrazil?.id
    });
    await Category.insertMany(categories);

    mongoose.disconnect();
    console.log("Categories created!");
};

createCategories();
