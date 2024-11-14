import { CiLogout } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
// import '../LogOut.css';

import { useState } from "react";
import { Link } from "react-router-dom";

function LogOut({showlogOut, setshowlogout}) {

    return(
        <div className={`${showlogOut ? "active_logout" : "logout-container"}`}>
        <div className="logout">
            <div className="logout-div1"> 
                <h1>Log out</h1>
                <p onClick={()=> setshowlogout(false)} className="div1-icon"><LiaTimesSolid /></p>
            </div>
            <div>
                <p className="icon"><CiLogout /></p>
                <p className="logout-p">Do you want to log out?</p>
            </div>
            <div>
                <button>CANCEL</button>
                <button><Link to='/successfullogout'>LOG OUT</Link></button>
            </div>
            
        </div>
        </div>
    )
}

export default LogOut;