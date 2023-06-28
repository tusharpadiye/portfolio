import React from 'react'
import "./footer.css"
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaMobile } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-box'>
            <div className='left'>
                    <div className='loaction'>
                        <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
                        <div>
                            <p>Adress initial</p>
                            <p>country</p>
                        </div>

                    </div>
                    <div className='mob'>
                        <h4>
                        <FaMobile size={20} style={{color:"white",marginRight:"2rem"}}/>
                        +917387417019
                        </h4>
                    
                    </div>
                    <div className='mob'>
                        <h4>
                        <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                        tushar07padiye@gmail.com
                        </h4>
                    
                    </div>
            </div>
            <div className='right'>
                <div className='social'>
                <FaFacebook size={20} style={{color:"white",marginRight:"1rem"}}/>
                <FaLinkedin size={20} style={{color:"white",marginRight:"1rem"}}/>   
                <FaGithub size={20} style={{color:"white",marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}
