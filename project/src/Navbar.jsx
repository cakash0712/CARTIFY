import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar(){
   return(
     <>
     <nav>
        <ul>
            <li>
                <Link to="/home" className="lis">Home</Link>
            </li>

            <li>
                <Link to="/about" className="lis">About</Link>
            </li>

            <li>
                <Link to="/contact" className="lis">Contact</Link>
            </li>




        </ul>





     </nav>
     
     
     
     
     
     
     </>






   )

}


export default Navbar