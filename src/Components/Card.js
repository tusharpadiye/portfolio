import React from "react";
import "./Card.css";
import pro1 from '../Assets/project1.png'
import Prodata from "./Prodata";
export default function Card() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
     <Prodata img={pro1} title="Project1" description="My project1" viewurl="pro1url.com" sourceurl="pro1source.com"/>
      </div>
    </div>
  );
}
