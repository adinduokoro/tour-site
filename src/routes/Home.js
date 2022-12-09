import React from 'react'
import Hero from '../components/Hero'
import IMGG from '../assets/1.jpg'

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={IMGG}
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  )
}

export default Home