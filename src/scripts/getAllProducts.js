import { PATH_DB } from '../constans/products.js';
import { readProducts } from '../utils/readProducts.js';

const getAllProducts = async () => {
  const products = await readProducts(PATH_DB);
  return products;
};

console.log(await getAllProducts());
