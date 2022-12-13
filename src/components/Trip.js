import React from 'react'
import './TripStyles.css'
import TripData from './TripData.js'
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/3.jpg'
import Trip3 from '../assets/2.jpg'

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Map</p>
      <div className='tripcard'>
        <TripData 
          image={Trip1}
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero neque labore culpa exercitationem sunt, beatae, suscipit ducimus ea rerum illo itaque quidem dolorum et nesciunt! Corrupti cum quo esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        />
        <TripData 
          image={Trip2}
          heading="Trip in France"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero neque labore culpa exercitationem sunt, beatae, suscipit ducimus ea rerum illo itaque quidem dolorum et nesciunt! Corrupti cum quo esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        />
        <TripData 
          image={Trip3}
          heading="Trip in Malaysia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero neque labore culpa exercitationem sunt, beatae, suscipit ducimus ea rerum illo itaque quidem dolorum et nesciunt! Corrupti cum quo esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        />
      </div>
    </div>
  )
}

export default Trip