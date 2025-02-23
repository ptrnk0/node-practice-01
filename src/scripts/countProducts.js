import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

async function countProducts() {
  const products = JSON.parse(await fs.readFile(PATH_DB));
  return products.length;
}

console.log(await countProducts());
