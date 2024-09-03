import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import {Base_URL,token} from "./../../config"
import {toast} from 'react-toastify'
const Profile = ({doctorData}) => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password:"",
        phone: "",
        bio: "",
        gender: "",
        specialization: "",
        qualifications: [{ startingDate: "", endingDate: "", degree: "", university: "" }],
        experiences: [{ startingDate: "", endingDate: "", position: "", hospital: "" }],
        timeSlots: [{ day: "", startingTime: "", endingTime: "" }],
        about: ''
    });
    useEffect(()=>{
        setFormData(
        {
            name:doctorData?.name,
            email:doctorData?.email,
            phone:doctorData?.phone,
            bio:doctorData?.bio,
            gender:doctorData?.gender,
            specialization:doctorData?.specialization,
            qualifications:doctorData?.qualifications,
            experiences:doctorData?.experiences,
            timeSlots:doctorData?.timeSlots,
            about:doctorData?.about

        })
    },[doctorData]);
    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const updateProfileHandler = async e => {
        e.preventDefault();
        // Add your form submission logic here
        try {
            const res = await fetch(`${Base_URL}/api/v1/doctors/${doctorData._id}`, {
                method: 'PUT',
                headers: {  // corrected from 'header' to 'headers'
                    'Content-Type': 'application/json',  // corrected to use camelCase
                    Authorization: `Bearer ${token}`, 
                },
                body: JSON.stringify(formData),
            });
            const result = await res.json();
            if (!res.ok) {
                throw Error(result.message);
            }
            toast.success(result.message);
        } catch (err) {
            toast.error(err.message);
            console.log(err);
        }
    };

    const addItem = (key, item) => {
        setFormData(prevFormData => ({ ...prevFormData, [key]: [...prevFormData[key], item] }));
    };

    const deleteItem = (key, index) => {
        setFormData(prevFormData => ({
            ...prevFormData, [key]: prevFormData[key].filter((_, i) => i !== index
            )
        }))
    }
    const handleReusableInputChangeFunc = (key, index, event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            const updatedItems = [...prevFormData[key]];
            updatedItems[index][name] = value;
            return {
                ...prevFormData,
                [key]: updatedItems,
            };
        });
    };

    const addQualification = e => {
        e.preventDefault();
        addItem('qualifications', {
            startingDate: "", endingDate: "", degree: "", university: ""
        });
    };



    const handleQualificationChange = (event, index) => {
        handleReusableInputChangeFunc('qualifications', index, event);
    };


    const deleteQualification = (e, index) => {
        e.preventDefault()
        deleteItem(`qualifications`, index)
    }



    const addTimeSlot = e => {
        e.preventDefault();
        addItem('timeSlots', {
            day: "", startingTime: "", endingTime: ""
        });
    };


    const handleTimeSlotChange = (event, index) => {
        handleReusableInputChangeFunc('timeSlots', index, event);
    };


    const deleteTimeSlot = (e, index) => {
        e.preventDefault()
        deleteItem(`timeSlots`, index)
    }



    const addExperiences = e => {
        e.preventDefault();
        addItem('experiences', {
            startingDate: "", endingDate: "", position: "", hospital: ""
        });
    };


    const handleExperiencesChange = (event, index) => {
        handleReusableInputChangeFunc('experiences', index, event);
    };


    const deleteExperiences = (e, index) => {
        e.preventDefault()
        deleteItem(`experiences`, index)
    }

    return (
        <div>
            <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
                Profile Information
            </h2>
            <form>
                <div className="mb-5">
                    <p className="form_label">Name*</p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className="form_input"
                    />
                </div>
                <div className="mb-5">
                    <p className="form_label">Email*</p>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="form_input"
                        readOnly
                    />
                </div>
                <div className="mb-5">
                    <p className="form_label">Phone*</p>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone number"
                        className="form_input"
                        readOnly
                    />
                </div>
                <div className="mb-5">
                    <p className="form_label">Bio*</p>
                    <input
                        type="text"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder="Bio"
                        className="form_input"
                        maxLength={100}
                    />
                </div>
                <div className="mb-5">
                    <div className="grid grid-cols-3 gap-5 mb-[30px]">
                        <div>
                            <p className="form_label">Gender*</p>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="form_input py-3.5"
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <p className="form_label">Specialization*</p>
                            <select
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleInputChange}
                                className="form_input py-3.5">
                                <option value="">Select</option>
                                <option value="Urology">Urology</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Paediatric Neurology">Paediatric Neurology</option>
                                <option value="Nephrology">Nephrology</option>
                                <option value="Gastroenterology">Gastroenterology</option>
                                <option value="Thyroid & Endocrine Surgery">Thyroid & Endocrine Surgery</option>
                                <option value="Vascular Surgery">Vascular Surgery</option>
                                <option value="Pulmonology">Pulmonology</option>
                                <option value="General Medicine">General Medicine</option>
                                <option value="Pain Medicine">Pain Medicine</option>
                                <option value="General Surgery">General Surgery</option>
                                <option value="Paediatric & Neonatology">Paediatric & Neonatology</option>
                                <option value="Dermatology & Cosmetology">Dermatology & Cosmetology</option>
                                <option value="ENT">ENT</option>
                                <option value="Radiology">Radiology</option>
                                <option value="Psychology">Psychology</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mb-5">
                    <p className="form_label">Qualification*</p>
                    {formData.qualifications?.map((item, index) => (
                        <div key={index}>
                            <div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <p className="form_label">Starting Date*</p>
                                        <input
                                            type="date"
                                            name="startingDate"
                                            value={item.startingDate}
                                            className="form_input"
                                            onChange={(e) => handleQualificationChange(e, index)} />
                                    </div>
                                    <div>
                                        <p className="form_label">Ending Date*</p>
                                        <input
                                            type="date"
                                            name="endingDate"
                                            value={item.endingDate}
                                            className="form_input"
                                            onChange={(e) => handleQualificationChange(e, index)} />
                                    </div>
                                    <div>
                                        <p className="form_label">Degree*</p>
                                        <input
                                            type="text"
                                            name="degree"
                                            value={item.degree}
                                            className="form_input"
                                            onChange={(e) => handleQualificationChange(e, index)} />
                                    </div>
                                    <div>
                                        <p className="form_label">University*</p>
                                        <input
                                            type="text"
                                            name="university"
                                            value={item.university}
                                            className="form_input"
                                            onChange={(e) => handleQualificationChange(e, index)} />
                                    </div>
                                </div>
                                <button onClick={e => deleteQualification(e, index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                                    <AiOutlineDelete />
                                </button>

                            </div>
                        </div>
                    ))}
                    <button onClick={addQualification} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer" >
                        Add Qualification
                    </button>
                </div>

                <div className="mb-5">
                    <p className="form_label">Experiences*</p>
                    {formData.experiences?.map((item, index) => (
                        <div key={index}>
                            <div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <p className="form_label">Starting Date*</p>
                                        <input
                                            type="date"
                                            name="startingDate"
                                            value={item.startingDate}
                                            className="form_input"
                                            onChange={(e) => handleExperiencesChange(e, index)} />
                                    </div>
                                    <div>
                                        <p className="form_label">Ending Date*</p>
                                        <input
                                            type="date"
                                            name="endingDate"
                                            value={item.endingDate}
                                            className="form_input"
                                            onChange={(e) => handleExperiencesChange(e, index)} />
                                    </div>
                                    <div>
                                        <p className="form_label">Position*</p>
                                        <input
                                            type="text"
                                            name="position"
                                            value={item.position}
                                            className="form_input"
                                            onChange={(e) => handleExperiencesChange(e, index)} />
                                    </div>
                                    <div>
                                        <p className="form_label">Hospital*</p>
                                        <input
                                            type="text"
                                            name="hospital"
                                            value={item.hospital}
                                            className="form_input"
                                            onChange={(e) => handleExperiencesChange(e, index)} />
                                    </div>
                                </div>
                                <button onClick={e => deleteExperiences(e, index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                                    <AiOutlineDelete />
                                </button>

                            </div>
                        </div>
                    ))}
                    <button onClick={addExperiences} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                        Add Experience
                    </button>
                </div>


                <div className="mb-5">
                    <p className="form_label">Time Slot*</p>
                    {formData.timeSlots?.map((item, index) => (
                        <div key={index}>
                            <div>
                                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                                    <div>
                                        <p className="form_label">Day*</p>
                                        <select
                                            name="day"
                                            value={item.day}
                                            className="form_input py-3.5"
                                            onChange={(e) => handleTimeSlotChange(e, index)}
                                        >
                                            <option value="">Select</option>
                                            <option value="saturday">Saturday</option>
                                            <option value="sunday">Sunday</option>
                                            <option value="monday">Monday</option>
                                            <option value="tuesday">Tuesday</option>
                                            <option value="wednesday">Wednesday</option>
                                            <option value="thursday">Thursday</option>
                                            <option value="friday">Friday</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p className="form_label">Starting Time*</p>
                                        <input
                                            type="time"
                                            name="startingTime"
                                            value={item.startingTime}
                                            className="form_input"
                                            onChange={(e) => handleTimeSlotChange(e, index)} />
                                    </div>
                                    <div>
                                        <p className="form_label">Ending Time*</p>
                                        <input
                                            type="time"
                                            name="endingTime"
                                            value={item.endingTime}
                                            className="form_input"
                                            onChange={(e) => handleTimeSlotChange(e, index)} />
                                    </div>
                                    <div className="flex item-center">
                                        <button onClick={e => deleteTimeSlot(e, index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer mt-6">
                                            <AiOutlineDelete />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button onClick={addTimeSlot} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                        Add TimeSlot
                    </button>
                </div>
                <div className="mb-5">
                    <p className="form_label">About*</p>
                    <textarea
                        name="about"
                        rows={5}
                        value={formData.about}
                        placeholder="Write about you"
                        onChange={handleInputChange}
                        className="form_input"></textarea>
                </div>
                <div className="mt-7">
                    <button type="submit" onClick={updateProfileHandler} className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg">
                        Update Profile
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Profile;
