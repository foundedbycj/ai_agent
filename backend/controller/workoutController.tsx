const Workout = require('../models/wo')

const getWorkouts = async ( req,res) => {
    const workouts  = await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}

const getWorkout = async (req , res)=>{
    const {id} = req.params
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

module.exports = {createWorkout,getWorkout,getWorkouts}