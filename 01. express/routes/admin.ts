import express, { Request } from 'express';
import { productsControler } from '../controllers/products';

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsControler.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsControler.postAddProduct);

export const adminData = { routes: router };
