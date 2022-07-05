const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    open:true,
    port: 3000,
    host: 'localhost',
  },
})
