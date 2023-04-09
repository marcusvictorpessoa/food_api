import mongoose from "mongoose";

const Category = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'Category'
    }
});


export default mongoose.model("Category", Category);