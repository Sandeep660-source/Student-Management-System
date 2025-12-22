import axios from "axios"
const API =axios.create({
    baseURL :"http://localhost:3001/api",
});

export const getAllStudents = async()=>{
    try{
        const response = await API.get("/students")
        console.log("response",response);
        console.log("response.data",response.data);
        console.log("response.data.students",response.data.students);
        const studentsArray = response.data.students; 

       return studentsArray;

    }
    catch(error){
        console.log("Error fetching STudents",error)

    }


}


//update student 
export const getStudentById = async (id)=>{
    try{
        const response = await API.get(`/student/${id}`);
        return response.data.student
    }
    catch(error){
        console.log("Failed to get student",error);
    }
}

export const addStudent = async ({name,age}) => {
    try{
        console.log("name", name)
        const response = await API.post("/student",{name,age});
        return response.data.messege;

    }

    catch(error){
        return "Error Creating Student",
        console.log("Error creating the student", error);
    }
}
export const updateStudent = async (id,name,age)=>{
    try{
        const response = await API.put(`/student/${id}`,{name,age})
        return response.data.message

    }
    catch(error){
        console.log("Error fatching students",error)
    }
    }
export const deleteStudent = async (id,name,age)=>{
    try{
        const response = await API.delete(`/student/${id}`)
        return response.data.message
    }
    catch(error){
        console.log("Error deleting Student",error)
    }
}

     
       

    