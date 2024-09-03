import { useState } from 'react'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'
import SidePanel from './SidePanel'
import useFetchData from '../../hooks/useFetchData'
import Loading from '../../components/Loader/Loading'
import Error from "../../components/Error/Error"
import { Base_URL } from '../../config'
import { useParams } from 'react-router-dom'
const DoctorsDetails = () => {
  const { id } = useParams()
  const [tab, setTab] = useState('about')
  const { data: doctor, loading, error } = useFetchData(`${Base_URL}/api/v1/doctors/${id}`)
  const {
    name,
    specialization,
    avgRating,
    totalRating,
    experiences,
    qualifications,
    bio,
    about,
    timeSlots
  } = doctor
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && <Loading />}
        {error && <Error />}
        {!loading && !error && (<div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <div className='bg-[#aaa0f3] h-[150px] w-[100px]  text-[50px] font-bold rounded-md  flex items-center justify-center'>
                {name ? name[0] : ''}
              </div>
              <div>
                <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  {specialization}
                </span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                  {name}
                </h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                    (272)
                  </span>
                </div>
                <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
                  {bio}
                </p>
              </div>
            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button
                onClick={() => setTab('about')}
                className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                About
              </button>
              <button
                onClick={() => setTab('feedback')}
                className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                Feedback
              </button>
            </div>
            <div className='mt-[50px]'>
              {tab === 'about' && <DoctorAbout name={name} about={about} qualifications={qualifications} experiences={experiences} />}
              {tab === 'feedback' && <Feedback />}
            </div>
          </div>
          <div>
            <SidePanel timeSlots={timeSlots} />
          </div>
        </div>)}
      </div>
    </section>
  )
}

export default DoctorsDetails