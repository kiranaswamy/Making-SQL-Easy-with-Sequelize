
const db = require('../utils/db-connection')
const Student = require('../models/students')

const addEntries =async (req,res)=>{
    try{
    const {email,name} = req.body;
    const student = await  Student.create({ email:email,name:name });
    res.status(201).send(`User with name: ${name} is created!`);
    
    }catch(err){
        console.log(err);
        res.status(500).send("Failed to create user");
    }
}

const updateEntries = async(req,res)=>{
    try{
    const {id} = req.params;
    const {name} = req.body
    const student= await Student.findByPk(id);
    if(!student){
        return res.status(404).send('User is not found')
    }
    student.name = name;
    await student.save();
    res.status(200).send('User has been updated')
    }catch(err){
        res.status(500).send('User can not be updated')
    }
}

const deleteEntries =async (req,res)=>{
    try{
    const {id} = req.params; 
    const student = await Student.destroy({
        where:{id:id}
    })
    if(!student){
        res.status(404).send('User is not found')
    }
    res.status(200).send('User is deleted')
    }catch(err){
        console.log(err);
        res.status(500).send('Error encounterd while deleting')
    }
}

module.exports ={
    addEntries,
    updateEntries,
    deleteEntries
}