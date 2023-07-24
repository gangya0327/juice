import ora from 'ora';
import type { Ora } from 'ora';

let spinner: Ora;
export function startLoading() {
  spinner = ora('正在努力查找，请稍等').start();
}

export function stopLoading() {
  spinner.stop();
}
