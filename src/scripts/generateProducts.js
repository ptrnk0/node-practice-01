import { createFakeProduct } from '../utils/createFakeProduct.js';
import { PATH_DB } from '../constans/products.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (num) => {
  const products = await readProducts(PATH_DB);

  for (let i = 0; i < num; i++) {
    products.push(createFakeProduct());
  }
  await writeProducts(products, PATH_DB);
};
generateProducts(3);
