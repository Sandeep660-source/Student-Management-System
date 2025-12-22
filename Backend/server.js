const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./connection/db");
const mongoose = require("mongoose");
const Student = require("./model/Student");

app.use(express.json());
app.use(cors());

const PORT = 3001;


ConnectDB();

app.post("/api/student", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(200).json({
      success: true,
      message:"Successfully Created Student",
      student: student,
    });
  } catch (error) {
    console.log("Error Creating Student", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.get("/api/students",async (req, res) => {
   try{
        const students = await Student.find();
        res.status(200).json({
            success: true,
            message: "Successfully Fetched all Students",
            students:students
   })
    
   }
   catch(error){
    res.status(400).json({
        sucess : false,
        message: "Error fetching Students",
        error:error

    })
    console.log("Error fetching STudents",error)
   }
});
app.put("/api/student/:id",async (req, res)=>{
  try{
    const studentId = req.params.id;
    const updateData = req.body;
    const student = await Student.findByIdAndUpdate(studentId,updateData);
    res.status(200).json({
      success : true,
      message : "Succesfully Updated Student",
      student : student 

    })

  }
  catch(error){
    res.status(400).json({
      success : false,
      message : "Error Updating Student",
      error : error
  })
 console.log("Error Updating student",error)
  }

})
app.delete("/api/student/:id",async (req,res)=>{
  try{
    const studentId =req.params.id;
    const student = await Student.findByIdAndDelete(studentId,);
    res.status(200).json({
      success : true,
      message : "Successfully Deleted Student",
      student : student
    })


  }
  catch(error){
     res.status(400).json({
      success : false,
      message : "Error Updating Student",
      error : error

  })
}
})


app.get("/api/student/:id",async (req,res)=>{
  try{
    const id = req.params.id
    console.log("id")
    const student = await Student.findById(id);

    if(!student){
      res.status(404).json({
        success:false,
        message:"Student not found"

      })
    }
    res.status(200).json({
      success:true,
      message:"Student fetched Successfully",
      student: student
    })

  }
  catch(error){
    console.log("error fetching Students",error)
  }
})


app.put("/api/sttudent/:id",async (req,res)=>{
  try{
    const id = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    const updateStudent = await Student.findByIdAndUpdate(id,{name,age},{new: true})
    if(!updateStudent){
      res.status(404).json({
        success : false,
        message : "Student not Updated"
      })
    }
    res.status(200).json({
      success : true,
      message : "Student Updated Succesfully",
      student : updateStudent
    })

  }
  catch(error){
    console.log("Error Updating student",error)
  }
})


app.delete("/api/student/:id", async (req, res) => {
try {
const deletedStudent = await Student.findByIdAndDelete(req.params.id);
if (!deletedStudent) {
return res.status(404).json({ message: "Student not found" });
}
res.status(200).json({
message: "Student deleted successfully",
deletedStudent
});
} catch (error) {
res.status(500).json({ message: "Error deleting student", error });
}
});

app.listen(PORT, () => {
  console.log("Application is running on Port", PORT);
});
