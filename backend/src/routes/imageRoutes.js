import express from 'express'
import { createImage, getImage } from '../controllers/imageController.js'

const router = express.Router();

router.get('/', getImage);
router.post('/', getImage);

export default router;