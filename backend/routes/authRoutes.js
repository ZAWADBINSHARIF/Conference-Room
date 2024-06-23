// external import
import express from 'express';

// internal import
import { authProfileUpdate, login, logout } from '../controllers/authController.js';
import { adminVerifier } from '../middlewares/authMiddleware.js';


const router = express.Router();

router.post('/', login);
router.get('/logout', logout);
router.post('/profile', adminVerifier, authProfileUpdate);


export default router;