import React from 'react'
import "./Aboutcomp.css"
import { Link } from 'react-router-dom'
import ra1 from "../Assets/react1.jpg"
import ra2 from "../Assets/react2.jpg"
export default function Aboutcomp() {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who Am I?</h1>
            <p>I'm a MERN STACK developer.

            </p>
            <Link to="/contact">
                <button className='btn'>CONTACT</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={ra1} className='img' alt='img'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={ra2} className='img' alt='img'/>
                </div>
            </div>
        </div>

    </div>
  )
}
