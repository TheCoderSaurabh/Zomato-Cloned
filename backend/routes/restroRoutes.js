import express from 'express'
import {createRestro, getRestro, getRestroById} from '../controllers/restroController.js'

const router = express.Router();

router.get('/restro', getRestro);
router.get('/:id', getRestroById);

router.post('/', createRestro);

export default router;