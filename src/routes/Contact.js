import React from 'react'
import Hero from '../components/Hero'
import IMGG from '../assets/2.jpg'
import ContactForm from '../components/ContactForm.js'


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
      <ContactForm />
    </>
  )
}

export default Contact