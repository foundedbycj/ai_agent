import express from 'express'


const router = express.Router()


router.get ('/',(req,res)=>{
    res.json({mssg:'GET ALL WORKOUT MFFS'})
})

router.get ('/:id',(req,res)=>{
    res.json({mssg:'Single wrkout'})
})

router.post('/',(req,res)=>{
    res.json({mssg:'Post a new wrokout'})
})


router.delete('/:id',(req,res)=>{
    res.json({mssg:'Delete a new wrokout'})
})


router.patch('/:id',(req,res)=>{
    res.json({mssg: 'update a new wrokout'})
})

module.exports = router