import React, { useState } from 'react'
import axios from 'axios'
const Create = () => {
    const [task , setTask]=useState()
    const handleAdd = () =>{
        axios.post('http://localhost:5000/add',{task:task})
        .then(result => {
          location.reload()
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
      <input type="text" className='inputt' onChange={(e) => setTask(e.target.value)} />
      <button type='button' className='buttonn' onClick={handleAdd}>Add</button>
    </div>
    
  )
}

export default Create