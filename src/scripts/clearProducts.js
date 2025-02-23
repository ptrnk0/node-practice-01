import { PATH_DB } from '../constans/products.js';
import { writeProducts } from '../utils/writeProducts.js';

async function clearProducts() {
  await writeProducts([], PATH_DB);
}

await clearProducts();
