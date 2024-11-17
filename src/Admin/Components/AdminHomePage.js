// src/Admin/Components/Home.js
import React from "react";
import "./Home.css";
import NavBar from "./NavBar";

const AdminHomePage = () => {
  return (
    <>
     <div className="home">
        <header className="header">
          <NavBar />
        </header>
        </div>

         <div>
      <h2>Welcome to Admin Dashboard</h2>
      <p>Here is the Admin dashboard content.</p>
    </div>
    </>
   
  );
};

export default AdminHomePage;
