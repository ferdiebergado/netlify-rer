import firstNamesData from './assets/firstnames.txt?raw';
import lastNamesData from './assets/lastnames.txt?raw';
import './style.css';

import { generateDriver, generatePlate, getEl, parseData } from './utils';

const firstNames = parseData(firstNamesData);
const lastNames = parseData(lastNamesData);

const regionSelect = getEl<HTMLSelectElement>('#region');
const generateBtn = getEl<HTMLButtonElement>('#generate');
const errorDiv = getEl<HTMLDivElement>('#error');
const plateDiv = getEl<HTMLDivElement>('#plate');
const driverDiv = getEl<HTMLDivElement>('#driver');
const resultDiv = getEl<HTMLOutputElement>('#result');

regionSelect.addEventListener('change', generate);
generateBtn.addEventListener('click', generate);

generate();

function generate(e?: Event) {
  e?.preventDefault();

  errorDiv.classList.add('hidden');
  errorDiv.textContent = '';

  try {
    const region = regionSelect.value;
    const plate = generatePlate(region);
    plateDiv.textContent = plate;
    const driver = generateDriver(firstNames, lastNames);
    driverDiv.textContent = driver;

    resultDiv.animate([{ opacity: 0.1 }, { opacity: 1 }], { duration: 700 });
  } catch (error) {
    showError(error);
  }
}

function showError(error: unknown) {
  console.error('[Generator Error]:', error);

  const msg = error instanceof Error ? error.message : 'An unexpected error occurred.';
  errorDiv.textContent = msg;
  errorDiv.classList.remove('hidden');
}
