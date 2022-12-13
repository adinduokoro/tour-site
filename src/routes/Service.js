import React from 'react'
import Hero from '../components/Hero'
import IMGG from '../assets/4.jpg'
import Trip from '../components/Trip'

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
      <Trip />
    </>
  )
}

export default Service