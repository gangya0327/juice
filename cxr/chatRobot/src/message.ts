export const messages: { role: 'user' | 'assistant'; content: string }[] = [];

export function addUserMessage(message: string) {
  messages.push({ role: 'user', content: message });
}

export function addBorMessage(answer: string) {
  messages.push({ role: 'assistant', content: answer! });
}
