export function getRandomElement(arr: string[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
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

export const parseData = (data: string) =>
  data
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0);
