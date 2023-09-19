import React from 'react'
import { useLocation } from 'react-router-dom';

const About = () => {
  const location=useLocation();
  return (
    <div className='page'>
        <h1>{location.pathname.replace("/","")} us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolores unde? Vel temporibus possimus, autem aliquid quasi repellat eius. Ratione neque quae doloribus delectus impedit, assumenda possimus aspernatur officiis pariatur!</p>
    </div>
  )
}

export default About;