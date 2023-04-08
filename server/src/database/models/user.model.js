import mongoose from "mongoose";

const userCollection = "users"

mongoose.set('strictQuery', true)

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    adress: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    avatar: { type: String, required: true },
    state: { type: String, default: "active", required: true }
},
    { timestamps: true }
)

export const UserModel = mongoose.model(userCollection, userSchema)