const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Doctor = require('../models/Doctor')
const Admin = require('../models/Admin')
mongoose.connect("mongodb+srv://ShatrunjayGohil:shatru123@cluster1.g33bks1.mongodb.net/demo_1").then(()=>{
    console.log("Connet to Mongo DB");
    const app = express();
    app.use(cors());
    app.use(bodyParser.json({extended: true}));
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/', async (req, res) =>{
        res.send("Get Method started");
        const doctor = await Doctor.find()
        console.log(doctor)
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
    // app.post('/admin/login', async (req, res) =>{
    //     const admin = await Admin.findOne({username: req.body.username, password: req.body});
    //     if(admin !== null){
    //         res.status(200).send(admin);
    //     }
    //     else{
    //         res.status(401).send("Invalid Credentials");
    //     }
    // })
    app.get('/doctor/:id', async (req, res) =>{
        const  doctor = await Doctor.findOne({doctorId : req.params.id});
        if(doctor){
            console.log(doctor);
            res.status(200).send(doctor);
        }
        else{
            res.status(401).send("Invalid Credentials");
        }
    })

    app.listen(3030,()=>{
        console.log("Server started at @ 3030")
    })
})