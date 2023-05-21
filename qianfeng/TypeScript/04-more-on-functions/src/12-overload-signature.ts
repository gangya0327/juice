function fn(x: string): void;
function fn() {}

fn('hello');

function fn2(x: boolean): void;
function fn2(x: string): void;
function fn2(x: boolean | string) {}

fn2('hello');

function fn3(x: boolean): void;
function fn3(x: string): void;
function fn3(x: string | boolean): string | boolean {
  return 'hello';
}

fn3('hello');
