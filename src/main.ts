import firstNamesData from './assets/firstnames.txt?raw';
import lastNamesData from './assets/lastnames.txt?raw';
import './style.css';

import { generateDriver, generatePlate, parseData } from './utils';

const firstNames = parseData(firstNamesData);
const lastNames = parseData(lastNamesData);

const regionSelect = document.querySelector<HTMLSelectElement>('#region');
const generateBtn = document.querySelector<HTMLButtonElement>('#generate');
const errorDiv = document.querySelector<HTMLDivElement>('#error');
const plateDiv = document.querySelector<HTMLDivElement>('#plate');
const driverDiv = document.querySelector<HTMLDivElement>('#driver');

regionSelect?.addEventListener('change', generate);
generateBtn?.addEventListener('click', generate);

generate();

function generate() {
  if (errorDiv) errorDiv.style.display = 'none';

  generateBtn?.classList.add('transition-transform', 'active:scale-95');

  try {
    if (plateDiv) {
      const plate = generatePlate(regionSelect?.value);
      plateDiv.textContent = plate;
    }

    if (driverDiv) {
      const driver = generateDriver(firstNames, lastNames);
      driverDiv.textContent = driver;
    }
  } catch (error) {
    handleError(error);
  }
}

function handleError(error: unknown) {
  console.error(error);

  if (errorDiv) {
    const err = error instanceof Error ? error.message : String(error);
    errorDiv.textContent = err;
    errorDiv.style.display = 'block';
  }
}
