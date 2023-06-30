import React from 'react'
import "./Card.css"
import { NavLink } from "react-router-dom";

export default function Prodata(props) {
  return (
    <div>
           <div className="project-card">
            <img src={props.img} alt="img" />
            <h2 className="project-title">{props.title}</h2>
        <div className="pro-detail">
            <p>
                {props.description}
            </p>
            <div className="pro-btn">
                <NavLink to={props.viewurl} className='btn'>View </NavLink>
                <NavLink to={props.sourceurl} className='btn'>Source</NavLink>
            
            </div>
        </div>
        </div>
    </div>
  )
}
