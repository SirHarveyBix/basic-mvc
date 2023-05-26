import express from 'express';
import { productsControler } from '../controllers/products';

const router = express.Router();

router.get('/', productsControler.getProducts);

export { router as shopRoutes };
