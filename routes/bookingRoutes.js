import express from 'express';
const router = express.Router();
import {createBooking,getBookings} from '../controllers/bookingController.js';

router.post('/',createBooking);
router.get('/',getBookings);
export default router;
