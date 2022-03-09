const express = require('express')
const router = express.Router()

// import doctor model

const Doctor = require('../models/Doctor')

router.get('/:id', async(req,res)=>{
    try{
        const oneDoctor = await Doctor.findById(req.params.id)
        //request all Doctors
        // console.log(allDoctors)
        res.json(oneDoctor)
        
    }catch(err){
        // res.status(400).json({
        //     error: err.message
        // })
        res.send('error occured')
    }

})
// doctors index route
router.get('/', async (req,res)=>{
    // // res.json({
    //     // message:"index route - Doctors"
    // })
    try{
        const allDoctors = await Doctor.find()
        //request all Doctors
        console.log(allDoctors)
        res.json(allDoctors)
        
    }catch(err){
        // res.status(400).json({
        //     error: err.message
        // })
        res.send('error occured')
    }
})

// doctors create route
router.post('/', async (req ,res)=>{
    // added async keyword to the anonymous function callback
    try{
        console.log(req.body)
         //try to run the code here
         const newDoctor = await Doctor.create(req.body)
         // await - pauses the execution of the code until the promise (Doctor.create) resolves - stores that returned value in newDoctor
         res.json(newDoctor)
    } catch(err){
        //if there is a error in the above code (a new error created by express or by mongoose)
        // access the error through the err param
    /*
    Doctor.create(req.body, (err, newDoctor)=>{
        res.send(newDoctor
            console.log(newDoctor)
            res.redirect('/'))
    })
    */
        console.log(err)
        res.send('error occured')

    }
})
// doctors delete route

router.delete('/:id', async (req ,res)=>{
    // added async keyword to the anonymous function callback
    try{
        console.log(req.body)
         const deleteDoctor = await Doctor.deleteOne({_id: req.params.id})
         res.json(deleteDoctor)
    } catch(err){
        console.log(err)
        res.send('error occured')

    }
})
router.put('/:id', async (req ,res)=>{
    // added async keyword to the anonymous function callback
    try{
        console.log("updating Dr info",req.body)
         const updateDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {new:true})
         // await - pauses the execution of the code until the promise (Doctor.create) resolves - stores that returned value in newDoctor
         res.json(updateDoctor)
    } catch(err){
        //if there is a error in the above code (a new error created by express or by mongoose)
        // access the error through the err param
    /*
    Doctor.create(req.body, (err, newDoctor)=>{
        res.send(newDoctor
            console.log(newDoctor)
            res.redirect('/'))
    })
    */
        console.log(err)
        res.send('error occured')

    }
})
// doctors update route





module.exports = router
