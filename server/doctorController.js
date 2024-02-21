
let doctorSchema = require('../models/Doctor');

const getDoctorbyId = async (req,res) =>{
        try{
            const id = parseInt(req.params.id);
            const doctor = await doctorSchema.findOne({doctorId: id});
            if(doctor){
                res.status(200).send(doctor);
            }
            else{
                res.status(401).send("Invalid Credentials");
            }
        }
        catch(error){
            console.error(error);
            res.status(401).send("Server Issue");
        }
}
const getAllDoctor = async (req, res) =>{
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
}

const createDoctor = async (req, res) =>{
    try{
        const doctor = new doctorSchema(req.body);
        await doctor.save();
        res.status(200).send(doctor);
    }
    catch(error){
        console.error(error);
        res.status(401).send("Server Issue");
    }
}

const updateDoctorbyId = async(req,res)=>{
    try{
        const id = parseInt(req.params.id);
        const updatedDoctor = await doctorSchema.findOneAndUpdate({doctorId : id}, req.body,{new : true}); 
        if(updatedDoctor !== null){
            res.status(200).send(updatedDoctor);

        }
        else{
            res.status(401).send("Invalid Credentials");
        }
    }
    catch(error){
        console.error(error);
        res.status(401).send("Server Issue");
    }
}

const deleteDoctorbyId = async(req,res)=>{
    try{
        const id = parseInt(req.params.id);
        const deletedDoctor = await doctorSchema.findOneAndDelete({doctorId : id}); 
        if(deletedDoctor!== null){
            res.status(200).send(deletedDoctor);

        }
        else{
            res.status(401).send("Invalid Credentials");
        }
    }
    catch(error){
        console.error(error);
        res.status(401).send("Server Issue");
    }
}
module.exports = {getDoctorbyId,getAllDoctor, createDoctor,updateDoctorbyId,deleteDoctorbyId};