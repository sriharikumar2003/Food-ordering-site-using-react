import React from "react";
import './Header.css'
import image from "./logo.png"

function Header(){
    return(
        <>
        <div id = "head">
        <ul id= "main">
          <li>Home</li>  
          <li>About Us</li> 
          <li>Contact</li>
          <li><img src={image}></img></li>
          <li id ="search"><input placeholder="enter item"></input><button type="submit">Search</button></li>
        </ul>
        </div> 
        </>
    )
}

export default Header;