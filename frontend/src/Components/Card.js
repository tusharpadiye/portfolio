import React, { useEffect, useState } from "react";
import "./Card.css";

import Prodata from "./Prodata";

export default function Card() {

  const [prodata,setprodata]=useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/displaydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setprodata(response[1]);
    
  };

  useEffect(() => {
    loadData();
  }, []);
  prodata.reverse();
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
      {
          prodata.map((data)=>{
            return(
              <Prodata 
                
                  img={data.img}
                  title={data.title}
                  description={data.description}
                  stacks={data.stacks}
                  viewurl={data.viewurl}
                  sourceurl={data.sourceurl}
                  
                  />

            )
          })
        }
      
      </div>
    </div>
  );
}
