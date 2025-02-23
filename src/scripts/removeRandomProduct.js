import { PATH_DB } from '../constans/products.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const removeRandomProduct = async () => {
  const products = await readProducts(PATH_DB);
  const randomIndex = Math.floor(Math.random() * products.lenght);
  products.splice(randomIndex, 1);
  await writeProducts(products, PATH_DB);
};
removeRandomProduct();
