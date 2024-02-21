const express = require('express');
const mongoose = require('mongoose');
let router = express.Router();

let doctorSchema = require('../models/Doctor');


router.get('/doctor/', async (req, res) => {
    try{
        const doctors = await doctorSchema.find();
        if(doctors) res.status(200).send(doctors);
        else{
            res.status(401).send("Invalid Credentials");
        }
        
    }
    catch(error){
        console.error(error);
        res.status(401).send("Server Issue");
    }
    
})
router.get('/doctor/:id', async(req,res)=>{
    const id = parseInt(req.params.id);
    const doctor = await doctorSchema.findOne({doctorId: id});
    try{
        if(doctor){
            res.status(200).send(doctor);
        }
        else{
            res.status(401).send("Invalid Credentials");
        }
    }
    catch(error){
        console.log(error);
        res.status(401).send("Server Issue");
    }
    
})
module.exports = router;