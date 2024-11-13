import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function NavBar() {
 

  
  return (
    <div className="navbar">
     
      
      <nav className="nav">

      <header>
     
      <ul className="navbar" >
       <NavLink to="/"> <li><a href="#home">Home</a></li></NavLink> 
       <NavLink to="/lostitems"> <li><a href="#">Lost Items</a></li></NavLink> 
       <NavLink to="/founditems"> <li><a href="#">Found Items</a></li></NavLink> 
       <NavLink to="/signup"> <li><a href="#">Sign Up</a></li></NavLink> 

      </ul>
      
    </header>
       
      </nav>
     
    </div>
  );
}

export default NavBar;