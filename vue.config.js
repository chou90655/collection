module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.9ku.com/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        },
        headers: {
          Connection: 'keep-alive'
        }
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  }
}
