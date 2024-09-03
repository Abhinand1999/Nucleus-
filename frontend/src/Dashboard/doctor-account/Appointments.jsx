import React from 'react'
import { formatDate } from '../../utils/formatDate'
import useFetchData from '../../hooks/useFetchData'
import { Base_URL } from '../../config'

const Appointments = () => {
    const { data: appointments } = useFetchData(`${Base_URL}/api/v1/doctors/appointments`)
    console.log(appointments)
    return (
        <table className='w-full text-life text-sm text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                    <th scope='col' className="px-6 py-3">
                        Name
                    </th>
                    <th scope='col' className="px-6 py-3">
                        Gender
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Booked On
                    </th>
                </tr>
            </thead>
            <tbody>
                {appointments?.map(item => (
                    <tr key={item._id}>
                        <th
                            scope='row'
                            className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap'>
                            <div className='flex items-center space-x-3'>
                                <div className='bg-[#aaa0f3] w-[35px] h-[35px] rounded-full flex items-center justify-center text-[20px] font-bold'>
                                    {item.user.name[0]}
                                </div>
                                <div>
                                    <div className='text-base font-semibold'>
                                        {item.user.name}
                                    </div>
                                    <div className='text-normal text-gray-500'>
                                        {item.user.email}
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-6 py-4">{item.user.gender}</td>
                        <td className="px-6 py-4">{formatDate(item.createdAt)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Appointments
