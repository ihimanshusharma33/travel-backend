import express from 'express';
const router = express.Router();
import {getAllPackages, getPackageById} from '../controllers/packageController.js';

router.get('/', getAllPackages);
router.get('/:id', getPackageById);

export default router;