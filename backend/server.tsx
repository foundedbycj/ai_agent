import express from 'express'
import 'dotenv/config'
const workoutRoutes = require('./route/workout' )

import mongoose from 'mongoose'

const app = express()

app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})


app.use('/api/workouts',workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{ 
        app.listen(process.env.PORT,()=>{
            console.log('listening to port',process.env.PORT)

        })
    })
    .catch((error)=>{
        console.log(error)
    })

