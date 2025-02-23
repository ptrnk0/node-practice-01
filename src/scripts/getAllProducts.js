import fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

const getAllProducts = async () => {
  const products = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(products);
};

console.log(await getAllProducts());
