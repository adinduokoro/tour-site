import React from 'react'
import Hero from '../components/Hero'
import IMGG from '../assets/night.jpg'

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
    </>
  )
}

export default About