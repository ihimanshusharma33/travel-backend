import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;
const mongoURI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.5bd2s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Connection options 

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

export default connectDB;
