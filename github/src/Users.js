import React from 'react'
import {useState, useEffect} from 'react'
import Cards from './Cards'
import User from './User'
import './users.css'
const Users = () =>{
   const [input, setInput]= useState('')
   const [userInfo, setUserInfo]= useState( [] )
   const[my, setMy]=useState([])
   
    useEffect(() => {
      const changeUsers = async () => {
      const url = `https://api.github.com/users`;
       await fetch(url)
         .then((response) => response.json())
         .then((data) => {
          setUserInfo(data);

           console.log(data)
         });
  };
  changeUsers();
},[])
const handleSubmit= async(event)=>{
    event.preventDefault()
    const url =
      input === ""
        ? "https://api.github.com/users"
        : `https://api.github.com/users/${input}`;
           await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        
        setMy(data);
        
        })
        

     
}


  return (
        <div className="users">
            <form className="form">
                  <input className="input" type="text"  value={input} onChange={event => setInput(event.target.value)}/>
                  <button  className="search" type="submit" onClick={handleSubmit}>Search</button>
            </form>
            {input!=="" ? <div className="userdata">
                  <User  user={my}  />
                </div>: ( 
            <div className="usersdata">
                        {userInfo.map(user=>(
                             <Cards user={user}/>
               ))}     
             </div>)}
           </div>
    )
}

export default Users
 