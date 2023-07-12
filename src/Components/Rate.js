import React from 'react'
import "./Rate.css"
import {FaStar} from "react-icons/fa"
export default function Rate(props) {
     const select=props.star;
    const Star =(num=5)=>{
        return Array(num).fill().map((item,i)=> <Dis key={i} selected={select>i} />);
    }
    const Dis = ({selected})=>{
        return <FaStar color={selected ? "red" : "grey"} />
    }
    // total number of stars

  return (
    <div>
         <div>
            {

                Star(5)
            }
         </div>
        
    </div>
  )
}
