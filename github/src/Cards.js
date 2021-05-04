import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import './cards.css'


const Cards=({user})=> {
 

  return (
    <Card className="cardcontent">
      <CardActionArea className="card" >
       
        <CardContent className="cardContent">
          <h1 className="h1">
           Username:  {user.login}
          </h1>
         <p classname="p">
           Repos Url:     {user.repos_url}
         </p>
          
         
         <p>  Url:     {user.url}</p>
           
         
         <a href={user.html_url} className="a" target="_blank">
                  Link to the {user.login} Github:   {user.html_url}
                  </a>
   
   
       
        </CardContent>
        </CardActionArea>
    </Card>
  );
}
            
/*import React from 'react';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import './cards.css'



const Cards=({user})=> {
  return (

 
 /*   <Card className="card" >
      
      <CardContent className="cardcontent">
      <Typography className="id">
       User ID: {user.id}
        </Typography>
        <Typography className="login">
       UserName: {user.login}
        </Typography>
        <Typography  className="repos">
        Repos Url: {user.repos_url}
        </Typography>
       
        <Typography className="avurl" color="">
        Avatar Url: {user.avatar_url}
        </Typography>
        <Typography variant="body2" component="p">
       
          <br />
       
        </Typography>
      </CardContent>
    
    </Card>*/




export default Cards;
