import React, { useState, useEffect } from 'react'
import "./EduCard.css"
import Edudatacard from './Edudatacard'

export default function EduCard() {
  const [edudata,setedudata]=useState([]);
  const loadData = async () => {
    let response = await fetch("https://portfolio-d86i.onrender.com/api/displaydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setedudata(response[0]);
    
  };

  useEffect(() => {
    loadData();
  }, []);
  edudata.reverse();
  return (
     
  
    <div>
         <div className="work-container">
      <h1 className="project-heading">Education</h1>
      <div className="project-container">
        {
          edudata.map((data)=>{
            return(
              <Edudatacard 
                  link={data.link}
                  name={data.name}
                  img={data.img}
                  degree={data.degree}
                  subject={data.subject}
                  time={data.time}
                  type={data.type}
                  result={data.result}
                  degreetype={data.degreetype}
                  subtext={data.subtext}
                  />

            )
          })
        }
       
      </div>
    </div>
    </div>
  )
}
