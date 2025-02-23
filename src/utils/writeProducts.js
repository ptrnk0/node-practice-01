import fs from 'node:fs/promises';

export const writeProducts = async (updateProducts, path) => {
  await fs.writeFile(path, JSON.stringify(updateProducts, null, 2), 'utf-8');
};
