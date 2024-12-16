import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
    id: String, 
    title: String,
    price: Number,
    duration: String,
    description: String,
    nextAvailableDate: String,
    images: [String],  
    highlights: [String], 
    itinerary: String,
    included: [String],  
    excluded: [String], 
    originalData: Boolean
});

const Package = mongoose.model('package', packageSchema);
export default Package;