import Package from '../models/package.js';

export const addPackage = async (req, res) => {
    try {
        const { 
            id, 
            title,
            price,
            duration,
            description,
            nextAvailableDate,
            images,  
            highlights, 
            itinerary,
            included,  
            excluded, 
         } = req.body;
        if (!id || !title || !price || !duration || !description || !nextAvailableDate || !images || !highlights || !itinerary || !included || !excluded) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }
        const newPackage = new Package({  id, 
            title,
            price,
            duration,
            description,
            nextAvailableDate,
            images,  
            highlights, 
            itinerary,
            included,  
            excluded,  });
        await newPackage.save();
        res.status(201).json({ message: 'Package added successfully', newPackage });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updatePackage = async (req, res) => {
    console.log(req.params.id);
    try {
        const updatedPackage = await Package.findOneAndUpdate(
            {id:req.params.id},
            req.body,{ new: true }
        );
        if (!updatedPackage) return res.status(404).json({ message: 'Package not found' });
        res.status(200).json({ message: 'Package updated successfully', updatedPackage });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deletePackage = async (req, res) => {
    try {
        const deletedPackage = await Package.findOneAndDelete({id:req.params.id});
        if (!deletedPackage) return res.status(404).json({ message: 'Package not found' });
        res.status(200).json({ message: 'Package deleted successfully', deletedPackage });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
