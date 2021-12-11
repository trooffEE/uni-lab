const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
      }),
    ],
  },

  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    port: process.env.VUE_APP_DEPLOYMENT_PORT,
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/stylesheets/helpers/_media.scss'),
        path.resolve(__dirname, './src/assets/stylesheets/helpers/_mixins.scss'),
        path.resolve(__dirname, './src/assets/stylesheets/helpers/_variables.scss'),
      ],
    },
  },

  transpileDependencies: [
    'vuetify'
  ]
}
