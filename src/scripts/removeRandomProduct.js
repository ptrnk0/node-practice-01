import fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

const removeRandomProduct = async () => {
  const products = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  const randomIndex = Math.floor(Math.random() * products.lenght);
  products.splice(randomIndex, 1);
  await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2), 'utf-8');
};
removeRandomProduct();
