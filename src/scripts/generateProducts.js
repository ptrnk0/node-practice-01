import { createFakeProduct } from '../utils/createFakeProduct.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

export const generateProducts = async (num) => {
  const productsStr = await fs.readFile(PATH_DB, 'utf-8');

  const products = productsStr ? JSON.parse(productsStr) : [];

  for (let i = 0; i < num; i++) {
    products.push(createFakeProduct());
  }
  await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2), 'utf-8');
};
generateProducts(3);
