import React,{useEffect} from 'react'
import "./Table.css"
import{getAllStudents} from "../services/api";


const Table = () => {

useEffect(() =>{
    getAllStudents();
  },[]);
  
  return (
    <div>
         
    <div>
      <table>
        <thead>
          
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            

            </tr>
          
        </thead>
        <tbody>
          <tr>
            <td>Shashank</td>
            <td>25</td>
            <td>
                <div>
                    <button>Edit</button>
                <button>Delete</button>
                </div>
            </td>
          </tr>
           <tr>
            <td>Manish</td>
            <td>23</td>
            <td><div>
                    <button>Edit</button>
                <button>Delete</button>
                </div></td>
          </tr>
           <tr>
            <td>farooq</td>
            <td>24</td>
            <td><div>
                    <button>Edit</button>
                <button>Delete</button>
                </div></td>
          </tr>
           <tr>
            <td>Manya</td>
            <td>21</td>
            <td><div>
                    <button>Edit</button>
                <button>Delete</button>
                </div></td>
          </tr>
           <tr>
            <td>Sandeep</td>
            <td>21</td>
            <td><div>
                    <button>Edit</button>
                <button>Delete</button>
                </div></td>
          </tr>
        </tbody>
      </table>
    </div>
      
    </div>
    
      
       
  )
}

export default Table
