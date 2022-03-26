module.exports = {
  plugins: process.env.NODE_ENV === 'production' ? {
    'postcss-px2rem': {
      remUnit: 37.5
    }
  } : {
    'postcss-px2rem': {
      remUnit: 37.5
    }
  }
}
