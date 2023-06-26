import React, { useState } from "react";
import "./Navstyle.css";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

export default function Navbar() {
    const [click,setclick]=useState(false);
    const handleclick=()=>setclick(!click);
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click? "nav-ul active": "nav-ul "}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
       
       <div className="temp" onClick={handleclick}>
        {click ? (
        <FaTimes size={20} style={{color:"#fff"}}/>

        ):
        <FaBars size={20} style={{color:"#fff"}}/>
        }
            
       </div>

    </div>

  );
}
