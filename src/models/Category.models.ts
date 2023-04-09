import mongoose from "mongoose";

const Parent = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Category'
    },
    name: {
        type: String,
        require: true,
    }
});

const Category = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    parent: {
        type: Parent,
        require: false,
    }
});



export default mongoose.model("Category", Category);