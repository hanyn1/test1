import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
export default function Useres() {
const [user,setUser]=useState([])
const getUser=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((ress)=>{
        console.log(ress.data)
        setUser(ress.data)
    })
    .catch((err)=>{console.log(err)})
}

  return (
    <div>
        <button onClick={getUser}>Click</button>
      {
        user.map((ele)=>(
            <ul class="list-group" key={ele.id}>
  <li class="list-group-item">{ele.name}</li>
</ul>
        ))
      }
    </div>
  )
}
