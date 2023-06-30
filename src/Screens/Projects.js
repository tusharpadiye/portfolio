import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
export default function Projects() {
  return (
    <div>
      <Navbar />
      <Hero heading="PROJECTS" text="Some of my most recent works"/>
      <Card/>
      <Footer/>
    </div>
  )
}
