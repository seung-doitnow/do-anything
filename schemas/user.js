import mongoose from "mongoose";

const UserScehema = new mongoose.Schema({
    userId: {
        type: Object,
        requirec: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    pw: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
})

export default mongoose.model("User", UserScehema);