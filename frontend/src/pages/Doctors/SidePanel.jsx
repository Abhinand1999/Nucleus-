import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import { Base_URL, token } from '../../config';

const SidePanel = ({ timeSlots }) => {
    // Initialize with today's date
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const submitHandler = async event => {
        event.preventDefault();

        if (!appointmentDate) {
            toast.error("Please select a date.");
            return;
        }

        setLoading(true);

        try {
            const formattedDate = appointmentDate.toISOString().split('T')[0];

            const res = await fetch(`${Base_URL}/api/v1/users/Booking/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ appointmentDate: formattedDate })
            });

            const { message } = await res.json();
            if (!res.ok) {
                throw new Error(message);
            }
            setLoading(false);
            toast.success(message);
        } catch (err) {
            console.log(err);
            toast.error(err.message);
            setLoading(false);
        }
    };

    return (
        <div className='shadow p-3 lg:p-5 rounded-md'>
            <div className="flex items-center justify-between">
                <p className='text__para mt-0 font-semibold'>
                    Ticket Price
                </p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                    500 TND
                </span>
            </div>
            <div className='mt-[30px]'>
                <p className='text__para mt-0 font-semibold text-headingColor'>
                    Available Time Slots:
                </p>
                <ul className='mt-3'>
                    {timeSlots?.map((item, index) =>
                        <li key={index} className='flex items-center justify-between mb-2'>
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>
                                {item.day}
                            </p>
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>
                                {item.startingTime}-{item.endingTime}
                            </p>
                        </li>
                    )}
                </ul>
            </div>

            <div>
                <p className='text__para mt-0 font-semibold text-headingColor'>
                    Appointment Date
                </p>
                <div className='border'>
                    <DatePicker 
                        selected={appointmentDate} 
                        onChange={date => setAppointmentDate(date)} 
                        dateFormat="dd-MM-yyyy"
                        placeholderText="Select a date"
                        required
                        minDate={new Date()} // Prevent selection of past dates
                    />
                </div>
            </div>

            <button 
                className='btn px-2 w-full rounded-md' 
                onClick={submitHandler} 
                disabled={loading} 
            >
                {loading ? 'Booking...' : 'Book'}
            </button>
        </div>
    );
}

export default SidePanel;
