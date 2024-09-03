import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js"
export const updateUser = async (req, res) => {
    const id = req.params.id;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
  
      res.status(200).json({
        success: true,
        message: "Successfully updated",
        data: updatedUser,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to update!",
        data: updateUser,
      });
    }
  };

  
export const deleteUser = async (req, res) => {
    const id = req.params.id;
  
    try {
      await User.findByIdAndDelete(id);
  
      res.status(200).json({
        success: true,
        message: "Successfully deleted",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to delete!",
        data: updateUser,
      });
    }
  };


  export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
      const user = await User.findById(id).select("-password"); // Query the user by ID
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "No User Found!",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "User Found",
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve user!",
        data: error,
      });
    }
  };

  
export const getAllUser = async (req, res) => {
    try {
      const users = await User.find().select("-password");
  
      res.status(200).json({
        success: true,
        message: "Users Found",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve users!",
        data: error.message, // Corrected error handling
      });
    }
  };
  
  export const getUserProfile=async(req,res)=>{
    const userId=req.userId
    try{
      const user=await User.findById(userId)
      if(!user)
      {
        return res.status(404).json({success:false,message:'User not found'})
      }
      const {password,...rest}=user._doc
      res.status(200).json({success:true,message:'Profile info is getting',data:{...rest}})
    }catch(err){
      res.status(500).json({success:false,message:"Something went wrong,cannot get"})
    }
  }

  export const getMyAppoiments=async(req,res)=>{
    try{
     
    // step-1:retrieve appoinments from booking for specific user
    const bookings=await Booking.find({user:req.userId})
    
    // step-2:extract doctor ids from appoinments bookings
    const doctorId=bookings.map(el=>el.doctor.id)
    console.log(doctorId)
    // step-3:retrieve doctors using doctor ids
    const doctors=await Doctor.find({_id:{$in:doctorId}}).select('-password')
    console.log(doctors)
    res.status(200).json({success:true,message:'Appoiments are getting',data:doctors})
  }catch(err){
    res.status(500).json({success:false,message:"Something went wrong,cannot get"})
  }
}