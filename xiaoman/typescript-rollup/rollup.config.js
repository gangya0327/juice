console.log(process.env);

import path from 'path';
import ts from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

export default {
  input: './src/index.ts',
  output: {
    file: path.resolve(__dirname, './lib/index.js'),
    format: 'umd',
    sourceMap: true,
  },
  plugins: [
    ts(), // 编译ts语句
    livereload(), // 热加载
    terser({
      compress: {
        drop_console: true, // 删除console语句
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    serve({
      open: false,
      port: 7001,
      openPage: '/public/index.html',
    }),
  ],
};
