import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Contactform from '../Components/Contactform'
export default function Contact() {
  return (
    <div>
      <Navbar/> 
      <Hero heading="CONTACT" text="Let's have a chat"/>
      <Contactform/>
      <Footer/>

    </div>
  )
}
