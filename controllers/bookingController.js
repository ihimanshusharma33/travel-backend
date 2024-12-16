import Booking from '../models/booking.js';
import Package from '../models/package.js';

export const createBooking = async (req, res) => {
    try {
        const { name, email, phone, travelers, specialRequests, packageId } = req.body;
        console.log(name, email, phone, travelers, specialRequests, packageId);
        if (!name || !email || !phone || !travelers || !packageId) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }
       
        const selectedPackage = await Package.findOne({ id: packageId });
        if (!selectedPackage) {
            return res.status(404).json({ message: 'Package not found' });
        }
        if (typeof selectedPackage.price !== 'number' ) {
            return res.status(400).json({ message: 'Invalid package price' });
        }
        if(isNaN(selectedPackage.price)){
            return res.status(400).json({ message: 'is not a number' });

        }
        const totalPrice = selectedPackage.price * travelers;
        const booking = new Booking({
            name,
            email,
            phone,
            travelers,
            specialRequests,
            packageId,
            totalPrice,
        });

        await booking.save();
        res.status(201).json({ message: 'Booking successful', booking });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
}