import express from 'express';
const router = express.Router();
import {addPackage,updatePackage,deletePackage} from '../controllers/adminController.js';

router.post('/packages', addPackage);
router.put('/packages/:id', updatePackage);
router.delete('/packages/:id', deletePackage);


export default router;
