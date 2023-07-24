import { askQuestion } from './user.js';
import { botAnswer, initBot } from './bot.js';
import { startLoading, stopLoading } from './loading.js';

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

import dotenv from 'dotenv';
dotenv.config({
  path: resolve(dirname(fileURLToPath(import.meta.url)), '../.env'),
});

initBot();

(async () => {
  while (true) {
    const userInput = askQuestion();
    checkExit(userInput);
    startLoading();
    await botAnswer();
    stopLoading();
  }
})();

function checkExit(userInput: string) {
  if (userInput === 'exit') {
    process.exit();
  }
}
