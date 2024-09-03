import React from 'react'

import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'

import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'

import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import faqImg from '../assets/images/faq-img.png'

import { Link } from 'react-router-dom'
import { BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About'
import ServiceLisT from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'

const Home = () => {
  return (
    <>
       {/* hero section */} 

       <section className='hero__section pt-[10px] 2xl:h-[800px]'>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-[200px] items-center justify-between'>            <div>
              <div className='lg:w-[550px]'>
                <h1 className='text-[25px] leading-[40px] text-headingColor font-[800] 
                md:text-[40px] md:leading-[50px]'>
                A Complete Health Service For Your Well-Being
                </h1>
                <p className='text__para'>
                Our Health Services are available 24x7, because our health experts want to serve you when you need them the most. Reach us through :
                </p>
                <button className='btn'>
                Appointment
                </button>
              </div>

              <div className='mt-[30px] lg:mt-[30px] flex flex-col lg:flex-row lg:items-center  
                 '>       
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[34px] lg:leading-[54px] font-[700]
                   text-headingColor'>
                    20+
                   </h2>
                   <span className='w-[60px] h-2 bg-yellowColor rounded-full block mt-[-10px]'></span>
                   <p className='text__para'>Years Of Experience</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[34px] lg:leading-[54px] font-[700]
                   text-headingColor'>
                    10+
                   </h2>
                   <span className='w-[70px] h-2 bg-purple-300 rounded-full block mt-[-14px]'></span>
                   <p className='text__para'>Clinic Location</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[34px] lg:leading-[54px] font-[700]
                   text-headingColor'>
                    100%
                   </h2>
                   <span className='w-[70px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                   <p className='text__para'>Patient Satisfaction</p>
                  </div>

                 </div>

            </div> 

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroImg01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img src={heroImg02}  alt="" className='w-full mb-[30px]'/>
                <img src={heroImg03} alt="" className='w-full' />
              </div>
            </div>

          </div>
        </div>
      </section>



      <section>
      <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing The Best Medical Services</h2>
            <p className='text__para text-center'>
            Nucleus Health Care is a library of health and medical templates with predefined web elements which helps you to build your medical templates best site Provide Comprehensive Quality Care About Medical Care Health Suspendisse metus turpis.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] 
          mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
                <img src={icon01} alt="" />
                </div>
                <div className='mt-[20px]'>
                  <h2 className='text-[25px] leading-9 text-headingColor font-[750] text-center'>
                    Find A Doctor
                  </h2>
                  <p className='text-[15px] leading-7 text-textColor font-[500] mt-4 text-center'>
                    click
                  </p>
                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="" />
                </div>

                <div className='mt-[20px]'>
                  <h2 className='text-[25px] leading-9 text-headingColor font-[750] text-center'>
                    Find A Location
                  </h2>
                  <p className='text-[15px] leading-7 text-textColor font-[500] mt-4 text-center'>
                  Nadapuram, Kozhikode
                  CA 673 504, Kerala, India
                  </p>
                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="" />
                </div>

                <div className='mt-[20px]'>
                  <h2 className='text-[25px] leading-9 text-headingColor font-[750] text-center'>
                    Book Appointment
                  </h2>
                  <p className='text-[15px] leading-7 text-textColor font-[500] mt-4 text-center'>
                  click 
                  </p>


                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>
            </div>



          </div>
          </div>
      </section>

      <About/>



      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Medical Services</h2>
            <p className='text__para text-center'>World-Class Care For Everyone. Our Health System Offers Unmatched,
              Expert Health Care.
            </p>
          </div>
          <ServiceLisT/>
        </div>
      </section>

      <section>
        <div className="container">
        <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Great Doctors</h2>
            <p className='text__para text-center'>World-Class Care For Everyone. Our Health System Offers Unmatched,
              Expert Health Care.
            </p>
          </div>

          <DoctorList/>
        </div>
      </section> 

      <section>
        <div className="container">
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={faqImg} alt="" />
            </div>
            <div className='w-full md:w-1/2'>
              <h2 className='heading'>
                Most Questions By Our Beloved Patient
                </h2>
              <FaqList/>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default Home