import React from 'react'


export default function Edudatacard(props) {
  return (
    <div>
          <div className="project-card">
          <img src={props.img} alt="img" />
          <div className='content'>
          <a href={props.link} style={{textDecoration:"underline" ,textDecorationColor:"#a7a7a7", color:"red"}}>
            <h2 className="project-title1">{props.name}</h2>

            </a>
            <h2 className="project-title" >{props.degreetype} :{props.degree}</h2>
            <h2 className="project-title" >{props.subtext}  {props.subject}</h2>
        <div className="pro-detail">
            <p>
                Year : {props.time}
                <br/>
                {props.type} : {props.result}
            </p>
          </div>
            
           
        </div>
        </div>
    </div>
  )
}
