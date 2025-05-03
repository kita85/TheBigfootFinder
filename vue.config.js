const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            VERSION: JSON.stringify(require('./package.json').version)
          },
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
        })
      ]
    }
  }
})
