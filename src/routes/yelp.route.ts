import express from 'express';
import { get_by_place_id } from '../controllers/yelp-controller';

const router = express.Router();
router.get('/:id', get_by_place_id);

export default router;
