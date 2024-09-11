import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true,"password is required"],
        minLength: [5, 'Must be of minimum length 5']
    }
},{timestamps: true})

export const User = mongoose.model("User",userSchema)
