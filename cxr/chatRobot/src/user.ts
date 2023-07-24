import { addUserMessage } from './message.js';

import readlineSync from 'readline-sync';
import colors from 'colors';

export function askQuestion() {
  const userInput = readlineSync.question(colors.blue('You: '));
  addUserMessage(userInput);
  return userInput;
}
