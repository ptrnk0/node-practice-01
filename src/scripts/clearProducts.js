import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

async function clearProducts() {
  fs.writeFile(PATH_DB, '[]');
}

await clearProducts();
