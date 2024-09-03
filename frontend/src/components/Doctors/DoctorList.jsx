import { doctors } from './../../assets/data/doctors'
import DoctorCard from './DoctorCard'
import { Base_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import Loading from '../Loader/Loading'
import Error from "../../components/Error/Error"
function DoctorList() {
  const {data,loading,error}=useFetchData(`${Base_URL}/api/v1/doctors`)
  return (
    <>
    {loading &&<Loading/>}
    {error && <Error/>}
    {!loading && !error &&(
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
     lg:mt-[55px]'> 
        {data.map (doctor => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
    </div>
  )}
    </>
  )
}

export default DoctorList