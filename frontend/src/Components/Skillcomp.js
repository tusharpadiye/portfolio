import React, { useEffect, useState } from "react";
import "./Skillcomp.css";

import Skillcard from "./Skillcard"
export default function Skillcomp() {
  
  const [skilldata,setskilldata]=useState([]);
  const loadData = async () => {
    let response = await fetch("https://portfolio-d86i.onrender.com/api/displaydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setskilldata(response[2]);

  };

  useEffect(() => {
    loadData();
  }, []);

 skilldata.reverse();
  return (
    <div className="main1">
      {
        
          skilldata.map((data)=>{
            return(
              <Skillcard

                  img={data.img}
                  name={data.name}
                  description={data.description}
                  star={data.star}
                  
                  />               
            )
          })
         
      }
      
    </div>
  );
}
