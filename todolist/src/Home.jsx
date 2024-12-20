import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import {FaRegCircle} from 'react-icons/fa'
import {MdDeleteOutline} from "react-icons/md"
import {FaCheckCircle} from "react-icons/fa"


const Home = () => {
    const[todos,setTodos]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/get')
      .then(result => setTodos(result.data))
      .catch(error => console.log(error))
    },[])

     const handleEdit = (id) =>{
        axios.put('http://localhost:5000/update/'+id)
        .then(result => {
            location.reload()
        })
        .catch(error => console.log(error))
     }
     const handleDelete = (id) =>{
        axios.delete('http://localhost:5000/delete/'+id)
        .then(result =>{
            location.reload()
        .catch(error => console.log(error))

        })
     }
    
  return (
    <div className='home'>
      <h2>Todo List</h2>
      <Create/>
      {
     todos.length === 0 
     ?
     <div >

         <h2>No Records</h2>
     </div>
     :
     todos.map(todo =>(
    <div className='task'>
        <div className='checkbox' onClick={() => handleEdit(todo._id)}>
            {todo.done ? 
            <FaCheckCircle/>
            :
            <FaRegCircle className='icon'/>
        }
        <p className={todo.done ? "line_through" : " "}>

        {todo.task}
        </p>
        </div>
        <div>
            <span><MdDeleteOutline className='icon' onClick={() =>handleDelete(todo._id)}/></span>
        </div>
    </div>
))
      }
    </div>
    
  )
}

export default Home
