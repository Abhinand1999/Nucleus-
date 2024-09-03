import Doctor from "../models/DoctorSchema.js"; // Import the Doctor model
import Booking from "../models/BookingSchema.js"
import User from "../models/UserSchema.js";
export const updateDoctor = async (req, res) => {
  // Rename the function to updateDoctor
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      // Use the Doctor model
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor, // Use updatedDoctor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update!",
      data: error,
    });
  }
};

export const deleteDoctor = async (req, res) => {
  // Rename the function to deleteDoctor
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id); // Use the Doctor model

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete!",
      data: error,
    });
  }
};

export const getSingleDoctor = async (req, res) => {
  // Rename the function to getSingleDoctor
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id)
      .select("-password"); // Use the Doctor model

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "No Doctor Found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Doctor Found",
      data: doctor, // Use doctor
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve doctor!",
      data: error,
      
    });
  }
};

export const getAllDoctor = async (req, res) => {
  // Rename the function to getAllDoctors
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      ); // Use the Doctor model
    }

    res.status(200).json({
      success: true,
      message: "Doctors Found",
      data: doctors, // Use doctors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve doctors!",
      data: error.message,
    });
  }
};
export const getDoctorProfile=async(req,res)=>{
 
  const doctorId=req.userId
  
  
  try{
    const doctor=await Doctor.findById(doctorId)
    
    
    if(!doctor)
    {
      return res.status(404).json({success:false,message:'doctor not found'})
    }
    const {password,...rest}=doctor._doc
    const appoinments=await Booking.find({doctor:doctorId})
    res.status(200).json({success:true,message:'Profile info is getting',data:{...rest,appoinments}})
  }catch(err){
    console.error('Error retrieving doctor profile:', err)
    res.status(500).json({success:false,message:"Something went wrong,cannot get"})
  }
}


export const ViewAppointments=async(req,res)=>
{
  try {    
    const doctorId = req.userId;
    // Find all appointments for the doctor
    const appointments = await Booking.find({ doctor: doctorId }).populate({
      path: 'user',
      select: 'name gender email' // Select only the 'name' field from the User document
    });

    if (appointments && appointments.length > 0) {
        appointments.forEach(appointment => {
            console.log('Booking:', appointment);
            console.log('Username:', appointment.user.name); // Access the name of each user
        });
        // Return an array of usernames
        res.status(200).json({
          success: true,
          message: "Doctors Found",
          data: appointments, // Use doctors
        });
    } else {
        console.log('No bookings found');
        return null;
    }
} catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
}
}
