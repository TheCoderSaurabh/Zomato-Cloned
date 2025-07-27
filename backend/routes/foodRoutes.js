import express from 'express'
import {createFood, getFood} from '../controllers/foodController.js'

const router = express.Router();

router.get('/', getFood);
// router.get('/:id', getFoodById)
router.post('/', createFood);

export default router;