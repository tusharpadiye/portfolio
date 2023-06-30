import React from 'react'

export default function Edudatacard(props) {
  return (
    <div>
          <div className="project-card">
          <img src={props.img} alt="img" />
            <h2 className="project-title">{props.name}</h2>
            <h2 className="project-title" >{props.degree}</h2>
            <h2 className="project-title" >{props.subject}</h2>
        <div className="pro-detail">
            <p>
                {props.time}
                <br/>
                {props.type} : {props.result}
            </p>
           
        </div>
        </div>
    </div>
  )
}
