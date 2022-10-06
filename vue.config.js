const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置插件参数
  configureWebpack: {
    plugins: [
      // 配置 jQuery 插件的参数
      new webpack.ProvidePlugin({
        // 引入jquery
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        // 引入popper.js
        Popper: ['popper.js', 'default']
      })
    ]
  }
})


