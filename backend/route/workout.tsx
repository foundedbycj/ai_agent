import express from 'express'
const controller = require('../controller/workoutController')
const Workout = require('../models/wo')
const router = express.Router()


router.get ('/',controller.getWorkouts)

router.get ('/:id',controller.getWorkout)

router.post('/',controller.createWorkout)


router.delete('/:id',(req,res)=>{
    res.json({mssg:'Delete a new wrokout'})
})


router.patch('/:id',(req,res)=>{
    res.json({mssg: 'update a new wrokout'})
})

module.exports = router