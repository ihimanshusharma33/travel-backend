import mongoose from 'mongoose';
const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    travelers: Number,
    specialRequests: String,
    packageId:String,
    totalPrice: Number,
});
const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
