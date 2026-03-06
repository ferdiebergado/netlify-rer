import firstNamesData from './assets/firstnames.txt?raw';
import lastNamesData from './assets/lastnames.txt?raw';
import './style.css';

import { generateFourDigitNumber, generateRandomLetters, getRandomIndex, parseData } from './utils';

const regionSelect = document.querySelector<HTMLSelectElement>('#region');
const generateBtn = document.querySelector<HTMLButtonElement>('#generate');
const errorDiv = document.querySelector<HTMLDivElement>('#error');
const plateDiv = document.querySelector<HTMLDivElement>('#plate');
const driverDiv = document.querySelector<HTMLDivElement>('#driver');

const firstNames = parseData(firstNamesData);
const lastNames = parseData(lastNamesData);

regionSelect?.addEventListener('change', generate);
generateBtn?.addEventListener('click', generate);

generate();

function generate() {
  if (errorDiv) errorDiv.style.display = 'none';

  try {
    const firstLetter = regionSelect?.value;
    const nextLetters = generateRandomLetters(2).toLocaleUpperCase();
    const numbers = generateFourDigitNumber();
    const plate = `${firstLetter}${nextLetters} ${numbers}`;

    let randomIndex = getRandomIndex(firstNames.length);
    const firstName = firstNames[randomIndex];
    randomIndex = getRandomIndex(lastNames.length);
    const lastName = lastNames[randomIndex];
    const driver = `${firstName} ${lastName}`;

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
