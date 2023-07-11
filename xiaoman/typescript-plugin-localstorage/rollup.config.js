import ts from 'rollup-plugin-typescript2';
import path from 'path';

export default {
  input: './demo1/src/index.ts',
  // input: './demo1/src/index2.ts',
  output: {
    file: path.resolve(__dirname, './demo1/dist/index.js'),
    // file: path.resolve(__dirname, './demo2/dist/index2.js'),
  },
  plugins: [ts()],
};
