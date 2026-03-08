function getRandomElement(arr: string[]): string {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export function generateFourDigitNumber(): number {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomLetters(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const parseData = (data: string): string[] =>
  data
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0);

export function generatePlate(firstChar = 'P', otherCharsLength = 2): string {
  const otherChars = generateRandomLetters(otherCharsLength).toLocaleUpperCase();
  const digits = generateFourDigitNumber();

  return `${firstChar}${otherChars} ${digits}`;
}

export function generateDriver(firstNames: string[], lastNames: string[]): string {
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  const driver = `${firstName} ${lastName}`;

  return driver.toLocaleUpperCase();
}
