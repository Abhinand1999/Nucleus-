import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  getUserProfile,
  getMyAppoiments,
} from "../Controllers/userController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";
import { BookAppointment } from '../Controllers/BookingControler.js';

const router = express.Router();

router.get("/:id", authenticate, restrict(["patient"]), getSingleUser); // Protected route
router.get("/",  getAllUser); // Public route     authenticate, restrict(["admin"])
router.put("/:id", authenticate, restrict(["patient"]), updateUser); // Protected route
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser); // Protected route
router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile); 
router.post('/Booking/:id',authenticate, BookAppointment);
router.get("/appointments/my-appointments", authenticate, restrict(["patient"]), getMyAppoiments); 
export default router;