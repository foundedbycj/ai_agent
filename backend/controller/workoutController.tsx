const Workout = require('../models/wo')
import mongoose from "mongoose"
const getWorkouts = async ( req,res) => {
    const workouts  = await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}

const getWorkout = async (req , res)=>{
    const id = req.params.id
    const workout = await Workout.findById(id)

    if (!workout){
        console.log( res.status(404).json({error:'No such workout'}))
    }

    res.status(200).json(workout)
}


const createWorkout = async(req,res)=>{
    const{title,reps,protein,time}  = req.body

    try {
        const workout = await Workout.create({title,reps,protein,time})
        res.status(200).json(workout)
    }
    catch (error){
        res.status(400).json({error:error.message})
    }
}

const deleteWorkout = async(req , res)=>{
    const id = req.params.id
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such wo'})
    }
    const workout = await Workout.findOneAndDelete({_id:id})

    if (!workout){
        return res.status(400).json({error:'No such workout'})


    }
    res.status(200).json(workout)
}


const updateWorkout = async(req ,res)=>{
    const id = req.params.id

    if   (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Wrong id"})
    }

    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if (!workout){
        return res.status(400).json({error:"No such Worokout"})
    }
    res.status(200).json(workout)
}
module.exports = {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout}