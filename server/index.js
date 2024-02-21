const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Doctor = require('../models/Doctor')
const Admin = require('../models/Admin')
const doctorRoute = require("./doctor_server");
const doctorController = require("./doctorController");
const adminController = require("./adminController");
mongoose.connect("mongodb+srv://ShatrunjayGohil:shatru123@cluster1.g33bks1.mongodb.net/demo_1").then(()=>{
    console.log("Connet to Mongo DB");
    const app = express();
    app.use(cors({origin : "http://localhost:3000",credentials: true}));
    app.use(bodyParser.json({extended: true}));
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/', async (req, res) =>{
        res.send("Get Method started");
       
    })

    app.post('/login',async (req, res) =>{
        const {username , password} = req.body
        const  doctor = await Doctor.findOne({username: username, password: password});
        const admin = await Admin.findOne({username: username,password : password});
        let user;
        if(doctor){
            user = doctor
        }
        else if(admin){
            user = admin
        }
        else {
            res.status(401).send("Invalid Credentials");
        }
        if(user !== null){
            res.status(200).send(user);
        }
        else{
            res.status(401).send("Invalid Credentials");
        }
    })
    app.get('/doctor', doctorController.getAllDoctor);
    app.get('/doctor/:id', doctorController.getDoctorbyId);
    app.post('/doctor/create', doctorController.createDoctor);
    app.put('/doctor/update/:id', doctorController.updateDoctorbyId);
    app.delete('/doctor/delete/:id', doctorController.deleteDoctorbyId);

    app.get('/admin', adminController.getAllAdmin);
    app.get('/admin/:id', adminController.getAdminById);
    app.post('/admin/create', adminController.createAdmin);
    app.put('/doctor/update/:id',adminController.updateAdminbyId);
    app.delete('/admin/delete/:id', adminController.deleteAdminbyId);
    // app.get('/doctor/:id', async (req, res) =>{
    //     const id = parseInt(req.params.id);
    //     const  doctor = await Doctor.findOne({doctorId : id});
    //     console.log(req.params.id);
    //     if(doctor !== null){
            
    //         console.log(req.params.id);
    //         res.status(200).send(doctor);
    //     }
    //     else{
    //         res.status(401).send("Invalid Credentials");
    //     }
    // })

    app.listen(3030,()=>{
        console.log("Server started at @ 3030")
    })
})