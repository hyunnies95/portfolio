module.exports = {
  publicPath: '/frontendmentor/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/sass/styles.sass";`
      }
    }
  }
};