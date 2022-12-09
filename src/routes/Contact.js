import React from 'react'
import Hero from '../components/Hero'
import IMGG from '../assets/2.jpg'

const Contact = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={IMGG}
        title="Contact"
        url="/"
        btnClass="hide"
      />
    </>
  )
}

export default Contact