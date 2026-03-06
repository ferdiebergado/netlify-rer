import firstNamesData from './assets/firstnames.txt?raw';
import lastNamesData from './assets/lastnames.txt?raw';
import './style.css';

import { generateFourDigitNumber, generateRandomLetters, getRandomElement } from './utils';

const regionSelect = document.querySelector('#region') as HTMLSelectElement;
const generateBtn = document.querySelector('#generate') as HTMLButtonElement;
const errorDiv = document.querySelector('#error') as HTMLDivElement;
const plateDiv = document.querySelector('#plate') as HTMLDivElement;
const driverDiv = document.querySelector('#driver') as HTMLDivElement;

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

regionSelect.addEventListener('change', generate);
generateBtn.addEventListener('click', generate);

function generate() {
  errorDiv.style.display = 'none';

  try {
    const firstLetter = (regionSelect as HTMLSelectElement).value;
    const nextLetters = generateRandomLetters(2).toLocaleUpperCase();
    const numbers = generateFourDigitNumber();
    const plate = `${firstLetter}${nextLetters} ${numbers}`;
    const firstname = getRandomElement(firstNames);
    const lastname = getRandomElement(lastNames);
    const driver = `${firstname} ${lastname}`;
    plateDiv.textContent = plate;
    driverDiv.textContent = driver.toLocaleUpperCase();
  } catch (error) {
    handleError(error);
  }
}

function handleError(error: unknown) {
  console.error(error);
  const err = error instanceof Error ? error.message : String(error);
  errorDiv.style.display = 'block';
  errorDiv.textContent = err;
}

async function parseData(data: string) {
  const lines = data.split('\n');

  return lines.map(l => l.trim());
}
