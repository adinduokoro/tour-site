import React from 'react'
import Hero from '../components/Hero'
import IMGG from '../assets/night.jpg'
import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={IMGG}
        title="About"
        url="/"
        btnClass="hide"
      />
      <AboutUs />
    </>
  )
}

export default About