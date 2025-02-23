import { PATH_DB } from '../constans/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { writeProducts } from '../utils/writeProducts.js';
import { readProducts } from '../utils/readProducts.js';

const addOneProduct = async () => {
  const data = await readProducts(PATH_DB);

  data.push(createFakeProduct());
  await writeProducts(data, PATH_DB);
};

addOneProduct();
