import Booking from "../models/BookingSchema.js";

export const BookAppointment = async (req, res) => {
    const { appointmentDate } = req.body;  // Extracting the date properly
    const doctor = req.params.id;

    try {
        const booking = new Booking({
            doctor,
            appointmentDate: new Date(appointmentDate),  // Converting to a Date object
            user: req.userId
        });

        await booking.save();
        res
            .status(200)
            .json({ success: true, message: "Appointment successfully booked" });
    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: "You Got Error, Try Again" });
        console.log(err);
    }
};
