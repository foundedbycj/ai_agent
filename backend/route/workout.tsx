import express from 'express'
const controller = require('../controller/workoutController')
const Workout = require('../models/wo')
const router = express.Router()


router.get ('/',controller.getWorkouts)

router.get ('/:id',controller.getWorkout)

router.post('/',controller.createWorkout)


router.delete('/:id',controller.deleteWorkout)


router.patch('/:id',controller.updateWorkout)

module.exports = router