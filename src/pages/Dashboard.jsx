import React from 'react'
import Styles from "./Dashboard.css";
const Dashboard = () => {
  return (
    <div>Dashboard
      <form action="">
      
        <input type="text" name="username" placeholder="Username"  /><br/>
        <input type="email" name="email" placeholder="Email" /><br/>
        <input type="password" name="password" placeholder="Password"/><br/>
        
        <input type="radio" name="gender" value="male" /> Male
        <input type="radio" name="gender" value="female"  /> Female
        <input type="radio" name="gender" value="other" /> Other
        <br/>
        <textarea name='' id="Country"></textarea>
      </form>
    </div>
  )
}

export default Dashboard