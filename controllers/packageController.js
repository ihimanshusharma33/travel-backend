import Package from '../models/package.js';

export const getAllPackages = async (req, res) => {
    try {
        console.log('getAllPackages controller active');
        const packageData = await Package.find({});
        if (!packageData) {
            return res.status(404).send('No packages found');
          }
        res.status(200).json(packageData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getPackageById = async (req, res) => {
    try {
        const package_ = await Package.findOne({id:req.params.id});
        if (!package_) return res.status(404).json({ message: 'Package not found' });
        res.status(200).json(package_);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
