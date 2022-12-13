import React from 'react'
import image1 from "../assets/4.jpg"
import image2 from "../assets/5.jpg"
import image3 from "../assets/6.jpg"
import image4 from "../assets/1.jpg"
import DestinationData from './DestinationData'
import './DestinationStyles.css'

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see alot, within a time frame</p>
      <DestinationData 
      className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero neque labore culpa exercitationem sunt, beatae, suscipit ducimus ea rerum illo itaque quidem dolorum et nesciunt! Corrupti cum quo esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt et modi eos saepe officiis odit cumque corporis recusandae, vero impedit voluptatem nemo quibusdam perspiciatis dolorem pariatur labore consectetur autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cumque cupiditate molestiae quibusdam itaque! Cupiditate"
        img1={image1}
        img2={image2}
      />
      <DestinationData 
      className="first-des-reverse"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero neque labore culpa exercitationem sunt, beatae, suscipit ducimus ea rerum illo itaque quidem dolorum et nesciunt! Corrupti cum quo esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt et modi eos saepe officiis odit cumque corporis recusandae, vero impedit voluptatem nemo quibusdam perspiciatis dolorem pariatur labore consectetur autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cumque cupiditate molestiae quibusdam itaque! Cupiditate"
        img1={image3}
        img2={image4}
      />
    </div>

      
  )
}

export default Destination