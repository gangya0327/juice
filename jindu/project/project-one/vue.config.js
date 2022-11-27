const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: 'localhost',
    port: 9001,
    proxy: {
      '/api': {
        // target: 'https://www.fastmock.site/mock/e4dd3c14cb41fd4290bc9156d8fefc40/web',
        target: 'http://127.0.0.1:4523/m1/1997005-0-default',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
