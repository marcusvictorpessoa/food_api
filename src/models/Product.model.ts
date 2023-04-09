import mongoose from "mongoose";

const Product = new mongoose.Schema({
    categories: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
        require: true
    },
    name: {
        type: String,
        require: true
    },
    qty: {
        type: Number,
        require: true,
        min: 0
    },
    price: {
        type: Number,
        require: true,
        min: 0
    }
});

export default mongoose.model('Product', Product);