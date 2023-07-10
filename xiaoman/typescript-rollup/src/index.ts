const str: string = 'abc123456';

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  console.log('env: development');
} else {
  console.log('env: production');
}

console.log(str);
