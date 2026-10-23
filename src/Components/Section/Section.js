import React from 'react'
import ReptileImage from '../../assets/ReptileImage.png'
import './Section.css'
const Section = () => {
  return (
    <>
    <section>
      <div className='section'>
        <img className= 'Reptile' src={ReptileImage} alt='lizard-img' />

        <div className='Text'>
          <h1>A Unique and Fascinating Reptile</h1>
        <span>The leopard gecko is a small, hardy lizard known for its
          beautiful spotted pattern and calm nature. It is native to
          rocky and arid regions, where it lives in burrows and crevices.
      </span>
        </div>
        
      </div>
    </section>
    </>
  )
}

export default Section;
