import express from 'express';

const router = express.Router();

const products: { title: string }[] = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// /admin/add-product => POST
router.post('/add-product', (request, response, _next) => {
  products.push({ title: request.body.title });
  response.redirect('/');
});

export const adminData = { routes: router, products };
