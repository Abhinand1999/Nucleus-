import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'

function About() {
  return (
    <section>
      <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
          
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt="About us" />
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
              <img src={aboutCardImg} alt="About card" />
            </div>
          </div>

          <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'>Pioneering in Health.</h2>
            <p className='text__para'>Nucleus Health Centre has a story of evolution which perhaps makes it a unique medical facility among others. And the uniqueness is that it was born out of an urge to give medical care to its initial patients.</p>

            <p className="text__para mt-[30px]">Introducing Our Revolutionary Doctor's Appointment App! Designed with your convenience in mind, it streamlines the booking process, offers real-time availability, and provides secure communication with healthcare professionals. Experience hassle-free healthcare at your fingertips!</p>

            <Link to='/'>
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
