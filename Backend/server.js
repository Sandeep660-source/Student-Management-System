
const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./connection/db");
app.use(express.json());
app.use(cors());
const PORT = 3000;

const mongoose = require("mongoose")
const Student = require("./model/Student")



app.post("/api/Student",async(req,res)=>{
    try{
        const newStudent = req.body;

        const Student = new Student(newStudent);
        await Student.save();

        res.statusMessage(200).json({
            success : true,
            student: Student
        })

    }
    catch(error){
        console.log("Error Creating Student")

    }

})
app.listen(PORT,()=>{
    console.log("Application is running in Port",PORT)
})