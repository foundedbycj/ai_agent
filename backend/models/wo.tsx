import mongoose from "mongoose";
import { Schema } from "mongoose";
const workoutSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    protein : {
        type: Number,
        required: true
    },
    time : {
        type: String,
        required: true
    }
},{timestamps:true})

module.exports  = mongoose.model('Workout',workoutSchema)