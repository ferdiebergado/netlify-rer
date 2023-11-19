import fs from 'fs/promises';
import { randomInt } from 'node:crypto';

function randInt(min: number, max: number): number {
  return randomInt(min, max + 1);
}

async function getDataFromFile(file: string): Promise<string[]> {
  const data = await fs.readFile(file, { encoding: 'utf-8' });

  return data.split('\n');
}

export { randInt, getDataFromFile };
