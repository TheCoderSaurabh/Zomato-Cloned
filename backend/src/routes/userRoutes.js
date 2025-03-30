import express from 'express'
import {registerUser, getAllUsers, loggedIn} from '../controllers/userController.js'

const router = express.Router();

router.post('/signup', registerUser);
router.get('/', getAllUsers)
router.post('/login', loggedIn);

export default router;