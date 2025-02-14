import React,{ useEffect, useState} from 'react'
import "./home.css"
import axios from 'axios'
const Home = () => {
    const [users,setUsers]=useState([]);
    console.log(users);

    useEffect(()=>{
        axios.get("")
        .then(res=>{
            
        })
    })
  return (
    <div>Home</div>
  )
}

export default Home