import React, { useState } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

export default function Prodata(props) {
  const ReadMore =({children})=>{
    const text =children;
    const [isreadmore, setIsReadmore]=useState(true);
    const toggleReadmore=()=>{
      setIsReadmore(!isreadmore);
    }
    return(
      <p className="text">
        {isreadmore? text.slice(0,150): text}
        <span onClick={toggleReadmore} className="read-or-hide">
          {isreadmore ? "   ...read more": "     show less"}
        </span>
      </p>
    )
  }
  return (
    <div>
      <div className="project-card">
        <img src={props.img} alt="img" />
        <div className="flexr">
          <div className="dflex">
            <h2 className="project-title">{props.title}</h2>
            <h3 style={{color:"white"}}> 
              :{props.stacks}
            </h3>
            <div className="pro-detail">
              <ReadMore>
                {props.description}
              </ReadMore>
            </div>
          </div>
          <div className="pro-btn">
          <NavLink to={props.viewurl} className="btn">
            View
          </NavLink>
          <NavLink to={props.sourceurl} className="btn">
            Source
          </NavLink>
        </div>
        </div>

        
      </div>
    </div>
  );
}
