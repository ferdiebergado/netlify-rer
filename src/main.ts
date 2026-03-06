import firstNamesData from './assets/firstnames.txt?raw';
import lastNamesData from './assets/lastnames.txt?raw';
import './style.css';

import { generateFourDigitNumber, generateRandomLetters, getRandomElement } from './utils';

const regionSelect = document.querySelector<HTMLSelectElement>('#region');
const generateBtn = document.querySelector<HTMLButtonElement>('#generate');
const errorDiv = document.querySelector<HTMLDivElement>('#error');
const plateDiv = document.querySelector<HTMLDivElement>('#plate');
const driverDiv = document.querySelector<HTMLDivElement>('#driver');

let firstNames: string[];
let lastNames: string[];

parseData(firstNamesData.trim())
  .then(data => {
    firstNames = data;
  })
  .catch(e => handleError(e));

parseData(lastNamesData.trim())
  .then(data => {
    lastNames = data;
    generate();
  })
  .catch(e => handleError(e));

regionSelect?.addEventListener('change', generate);
generateBtn?.addEventListener('click', generate);

function generate() {
  if (errorDiv) errorDiv.style.display = 'none';

  try {
    const firstLetter = regionSelect?.value;
    const nextLetters = generateRandomLetters(2).toLocaleUpperCase();
    const numbers = generateFourDigitNumber();
    const plate = `${firstLetter}${nextLetters} ${numbers}`;
    const firstname = getRandomElement(firstNames);
    const lastname = getRandomElement(lastNames);
    const driver = `${firstname} ${lastname}`;
    if (plateDiv) plateDiv.textContent = plate;
    if (driverDiv) driverDiv.textContent = driver.toLocaleUpperCase();
  } catch (error) {
    handleError(error);
  }
}

function handleError(error: unknown) {
  console.error(error);
  const err = error instanceof Error ? error.message : String(error);
  if (errorDiv) {
    errorDiv.style.display = 'block';
    errorDiv.textContent = err;
  }
}

async function parseData(data: string) {
  const lines = data.split('\n');

  return lines.map(l => l.trim());
}
