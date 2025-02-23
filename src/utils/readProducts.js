import fs from 'node:fs/promises';

export const readProducts = async (path) => {
  const data = await fs.readFile(path, 'utf-8');
  return data ? JSON.parse(data) : [];
};
