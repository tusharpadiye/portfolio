import React from 'react'
import "./Skillcomp.css"
import Rate from "./Rate"

export default function Skillcard(props) {
  const list=props.description;

  return (
    <div class="skill-card">
  <header class="skill-card__header"><img class="skill-card__icon" src={props.img} alt={props.name}/></header>
  <section class="skill-card__body">
    <h2 class="skill-card__title">{props.name}</h2>
    <span class="skill-card__duration">
    <Rate star={props.star}/>
    </span>
    <ul class="skill-card__knowledge">
      {
        list.map((ele)=>{
          return(
            <li>{ele}</li>
          )
        })
      }
      
    </ul>
  </section>
</div>
  
  )
}
