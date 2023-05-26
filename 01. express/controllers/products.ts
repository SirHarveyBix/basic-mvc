import { Response, Request } from 'express';
import { IProduct, Product } from '../models/products';

const getAddProduct = (_request: Request, response: Response) => {
  response.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
const postAddProduct = (request: Request, response: Response) => {
  const product = new Product(request.body.title);
  product.save();
  response.redirect('/');
};

const getProducts = (_request: Request, response: Response) => {
  Product.fetchAll((products: string | IProduct[]) =>
    response.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    })
  );
};

export const productsControler = {
  getAddProduct,
  postAddProduct,
  getProducts,
};
