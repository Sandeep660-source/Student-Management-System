import React, { useEffect, useState } from 'react'
import { getStudentById,updateStudent } from '../services/api'
import { useParams,useNavigate} from 'react-router-dom';

const EditStudent = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [student, setStudent] = useState("");
  const [message, setMessage] = useState("");
  const {id} = useParams()

  useEffect(()=>{
    async function usefetchStudent(){
      try{
        console.log("id",id)
        const student =  await getStudentById(id);
        setName(student.name);
        setAge(student.age);
      }
      catch(error){

      }

    }
    usefetchStudent()
  },[id]);

  const handleUpdate = async(e)=>{
    e.preventDefault();
    const updateStudentresponse = updateStudent(id,name,age);
    setMessage(updateStudentresponse)
      
  }

  return (
          <>
        <div>
          <div>
           
        <form  onSubmit={handleUpdate}>
          <div className="heading">Edit Student</div>
          <div>Enter Name :{" "} <input type="text" value={name} onChange={(e) => setName(e.target.value)}/></div>
          <div>Enter Age :{" "} <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/></div>
          <div><button type="submit">Update</button>
          <div>{message}</div>
          </div>
        </form>
      </div>
      </div>  
 </>
  )
}


export default EditStudent