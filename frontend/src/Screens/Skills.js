import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Skillcomp from '../Components/Skillcomp'
import Hero from '../Components/Hero'
export default function Skills() {
  return (
    <div>
        <Navbar/>
        <Hero heading="SKILLS" text="Those I have Expertice in" />
        <Skillcomp />
        <Footer />
    </div>
  )
}
