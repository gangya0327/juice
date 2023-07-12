import ts from 'rollup-plugin-typescript2';
import path from 'path';

export default {
  // input: './demo1/src/index.ts',
  input: './demo2/src/index.ts',
  output: {
    // file: path.resolve(__dirname, './demo1/dist/index.js'),
    file: path.resolve(__dirname, './demo2/dist/index.js'),
  },
  plugins: [ts()],
};
