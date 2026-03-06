export const getRandomIndex = (arrLength: number): number => Math.floor(Math.random() * arrLength);

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

export function generatePlate(firstChar = 'P', nextCharsLength = 2): string {
  const nextChars = generateRandomLetters(nextCharsLength).toLocaleUpperCase();
  const digits = generateFourDigitNumber();

  return `${firstChar}${nextChars} ${digits}`;
}

export function generateDriver(firstNames: string[], lastNames: string[]): string {
  let randomIndex = getRandomIndex(firstNames.length);
  const firstName = firstNames[randomIndex];

  randomIndex = getRandomIndex(lastNames.length);
  const lastName = lastNames[randomIndex];

  const driver = `${firstName} ${lastName}`;

  return driver.toLocaleUpperCase();
}
