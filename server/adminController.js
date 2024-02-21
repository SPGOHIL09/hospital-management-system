const adminSchema = require('../models/Admin');

const getAllAdmin = async (req,res)=>{
        try{
            const admins = await adminSchema.find();
            if(admins) res.status(200).send(admins);
            else{
                res.status(401).send("Invalid Credentials");
            }
        }
        catch(error){
            console.error(error);
            res.status(401).send("Server Issue");
        }
}

const getAdminById = async (req,res)=>{
        try{
            const id = parseInt(req.params.id);
            const admin = await adminSchema.findOne({adminId: id});
            if(admin){
                res.status(200).send(admin);
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

const createAdmin = async (req, res) =>{
    try{
        const admin = new adminSchema(req.body);
        await admin.save();
        res.status(200).send(admin);
    }
    catch(error){
        console.error(error);
        res.status(401).send("Server Issue");
    }
}

const updateAdminbyId = async(req,res)=>{
    try{
        const id = parseInt(req.params.id);
        const updatedAdmin = await adminSchema.findOneAndUpdate({adminId : id}, req.body,{new : true}); 
        if(updatedAdmin!== null){
            res.status(200).send(updatedAdmin);

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
const deleteAdminbyId = async(req,res)=>{
    try{
        const id = parseInt(req.params.id);
        const deletedAdmin = await adminSchema.findOneAndDelete({adminId : id}); 
        if(deletedAdmin!== null){
            res.status(200).send(deletedAdmin);

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


module.exports = {getAdminById,getAllAdmin, createAdmin,updateAdminbyId,deleteAdminbyId};