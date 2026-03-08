function getRandomInt(min: number, max: number): number {
  const range = max - min + 1;
  const randomBuffer = new Uint32Array(1);
  crypto.getRandomValues(randomBuffer);
  return min + (randomBuffer[0] % range);
}

const getRandomElement = <T>(arr: T[]): T => arr[getRandomInt(0, arr.length - 1)];

export function generateRandomLetters(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(getRandomInt(0, chars.length - 1));
  }
  return result;
}

export const parseData = (data: string): string[] =>
  data
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean);

export function generatePlate(regionLetter = 'P', otherLettersLength = 2): string {
  const otherLetters = generateRandomLetters(otherLettersLength);
  const digits = getRandomInt(1000, 9999);

  return `${regionLetter}${otherLetters} ${digits}`;
}

export function generateDriver(firstNames: string[], lastNames: string[]): string {
  if (firstNames.length === 0 || lastNames.length === 0) throw new Error('No data loaded');

  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  const driver = `${firstName} ${lastName}`;

  return driver.toLocaleUpperCase();
}

export const getEl = <T extends HTMLElement>(selector: string) => {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`Element ${selector} not found`);
  return el;
};
