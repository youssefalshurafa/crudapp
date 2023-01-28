import { Router } from 'express';
import * as controller from '../database/controller.js';

const router = Router();

// POST METHODS
router.route('/').post(controller.postProduct);
// GET METHODS
router.route('/').get(controller.getProducts);
// PUT MERTHODS
router.route('/').put(controller.putProduct);
// DELETE METHOD
router.route('/').delete(controller.deleteProduct);
export default router;
