// Import required modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import packageRoutes from './routes/packageRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';
import connectDB from './connection.js'; // Import the connection function

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB(); // Establish MongoDB connection

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
// Routes
app.use('/packages', packageRoutes);
app.use('/bookings', bookingRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
