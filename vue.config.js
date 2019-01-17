module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
    },
  },
  publicPath: process.env.ghbaseurl || '/',
};
