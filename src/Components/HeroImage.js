import React from 'react'
import "./HImgstyle.css"

import IntroImg from "../Assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

export default function HeroImage() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='IntroImg' />
        </div>
        <div className='content'>
            <p>HI, I'M TUSHAR</p>
            <h1>WEB DEVELOPER</h1>
            <div>
                <Link to="/projects" className='btn'>PROJECTS</Link>
                <Link to="/contact" className='btn btn-light'>CONTACT</Link>
            </div>
        </div>
    </div>
  )
}
