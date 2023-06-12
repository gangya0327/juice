const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 7070,
  },
  lintOnSave: false,
  transpileDependencies: true
})
