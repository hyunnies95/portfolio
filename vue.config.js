module.exports = {
  publicPath: '/portfolio/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/sass/styles.sass";`
      }
    }
  }
};