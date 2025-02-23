import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

async function countProducts() {
  const dbData = await fs.readFile(PATH_DB, 'utf-8');
  const products = dbData ? JSON.parse(dbData) : [];
  return products.length;
}

console.log(await countProducts());
