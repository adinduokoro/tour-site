import React from 'react'
import Hero from '../components/Hero'
import IMGG from '../assets/4.jpg'

const Service = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={IMGG}
        title="Service"
        url="/"
        btnClass="hide"
      />
    </>
  )
}

export default Service