import mongoose from "mongoose";
import * as bcrypt from "bcrypt";

const User = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
{
    methods: {
        compare(password) {
            return bcrypt.compareSync(password.toString(), this.password);
        }
    }
});

User.pre('save', async function (next) {
    const hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword;
    next();
});

/*function (password) {
    return bcrypt.compareSync(password, this.password)
}*/

export default mongoose.model("User", User);