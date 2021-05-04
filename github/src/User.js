import React from 'react'
import './user.css'
const User=({user})=> {
  
  return (
     <div className="body">
       { 
       user.login?(
          <div className="contents">
          <h1 className="username">Username: {user.login}</h1>
          <h1 className="h1">
          {!user.avatar_url ? (
            " "
          ) : (
            <img
              className="image"
              src={user.avatar_url}
              alt={user.avatar_url}
            />
          )}
        </h1>
        {user.location ? (
          <div className="con">
        <h1>User location: {user.location}</h1>
        <h1>User Url: {user.url}</h1>
        </div> )
         :    <div className="no">No Details</div>}
         
         <div className="co">
        <h1> Followers : {user.following}</h1>
        <h1> Following : {user.followers} </h1>
           </div>
                <div className="content">
                  <a href={user.html_url} className="header" target="_blank">
                  Link to the {user.login} Github:   {user.html_url}
                  </a>
                </div>
             
                </div>
        ):"Loading..."}
                </div> )
  }
 
 
  
export default User
