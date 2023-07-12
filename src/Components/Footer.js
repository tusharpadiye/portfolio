import React from 'react'
import "./footer.css"
import { FaGithub, FaLinkedin, FaMailBulk, FaMobile } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-box'>
            <div className='left'>
                   
                    <div className='mob'>
                        <h4>
                        <FaMobile size={20} style={{color:"white",marginRight:"2rem"}}/>
                        +91-7387417019
                        </h4>
                    
                    </div>
                    <div className='mob'>
                        <h4>
                        <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                        tushar07padiye@gmail.com
                        </h4>
                    
                    </div>
                    <div className='mob'>
                       
                    <Link to="https://github.com/tusharpadiye"> <FaGithub size={20} style={{color:"white",marginRight:"1rem"}}/></Link>
                    <Link to="https://www.linkedin.com/in/tushar-padiye-b75503248/"> <FaLinkedin size={20} style={{color:"white",marginRight:"1rem"}}/>   
                </Link>
                    </div>
            </div>
          
        </div>
    </div>
  )
}
