module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
    },
  },
  baseUrl: process.env.ghbaseurl || '/',
};
