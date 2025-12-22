import React, { useState } from 'react'
import { addStudent } from '../services/api';

const CreateStudent = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [messege, setMessege] = useState("");


  const handleSubmit = async (e)=>{
    e.preventDefault();
    const createStudentResponse = await addStudent({name,age});
    setMessege(createStudentResponse);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="heading">Create Student </div>
        <div>Enter Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /></div>
        <div>Enter Age : <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/></div>
        <div><button type='submit'>Submit</button></div>
      </form>
    </div>
  )
}

export default CreateStudent