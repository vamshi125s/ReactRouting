import React, { useState } from 'react'

const Dashboard = () => {
  const [username ,setUsername] =useState('');
  const [mail ,setMail] =useState('');
  const [psw ,setPsw] =useState('');
  const [gender ,setGender] =useState('');
  const [address ,setAddress] =useState('');
  const [country ,setCountry] =useState('');
  const [file ,setFile] =useState('');

  let handleGenderChange=e=>{
    setGender(e.target.value)
  }

  let handleSubmit=e=>{
    e.preventDefault();
    console.log({username , mail , psw ,gender , address , country , file});
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        /> <br/>
        <input type="email" placeholder='Email'
         value={mail}
         onChange={(e)=>setMail(e.target.value)}
        /> <br/>
        <input type="password" placeholder='password'
        value={psw}
        onChange={(e)=>setPsw(e.target.value)}
        /> <br/>

        <input type="radio"  name='gender' checked={gender === "male"} value="male" onChange={handleGenderChange}/><label htmlFor="">Male</label>
        <input type="radio"  name='gender' checked={gender === "female"} value="female" onChange={handleGenderChange}/><label htmlFor="">Female</label>
        <input type="radio"  name='gender' checked={gender === "others"} value="others" onChange={handleGenderChange}/><label htmlFor="">Others</label>
        <br />
        <textarea name="" id="add" 
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        ></textarea>
        <br />
        <select name="" id="country"
        value={country}
        onChange={(e)=>setCountry(e.target.value)}
        >
          <option value="">---country---</option>
          <option value="india">India</option>
          <option value="pakisthan">Pakisthan</option>
          <option value="China">China</option>
        </select>
        <br />
        <input type="file" 
        value={file}
        onChange={(e)=>setFile(e.target.value)}
        />
        <br />
        <input type="submit" value="SignUp" />
      </form>
    </div>
  )
}

export default Dashboard