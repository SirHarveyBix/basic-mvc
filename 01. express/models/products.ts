import path from 'path';
import fs from 'fs';

export interface IProduct {
  title: string;
}

const saveProducts = path.join(
  path.dirname(require.main!.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (callBack: { (products: IProduct[]): void }) => {
  fs.readFile(saveProducts, (error, fileContent: any) => {
    if (error) {
      return callBack([]);
    }
    callBack(JSON.parse(fileContent));
  });
};

export class Product {
  title: string;
  constructor(title: string) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(saveProducts, JSON.stringify(products), (error) => {
        console.error(error);
      });
    });
  }

  static fetchAll(callBack: { (products: IProduct[]): void }) {
    getProductsFromFile(callBack);
  }
}
