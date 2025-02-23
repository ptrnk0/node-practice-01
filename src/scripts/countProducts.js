import { PATH_DB } from '../constans/products.js';
import { readProducts } from '../utils/readProducts.js';

async function countProducts() {
  const dbData = await readProducts(PATH_DB);
  return dbData.length;
}

console.log(await countProducts());
