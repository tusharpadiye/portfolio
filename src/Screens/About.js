import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Aboutcomp from '../Components/Aboutcomp'
export default function About() {
  return (
    <div>
      <Navbar/>
      <Hero heading="About" text="I'm a Full Stack Developer" />
      <Aboutcomp/>
      <Footer/>

    </div>
  )
}
