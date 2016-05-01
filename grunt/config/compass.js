// grunt compass task

module.exports = {
  options: {
    sassDir: '<%= config.app %>/styles/',
    cssDir: '.tmp/styles',
    specify: [
      '<%= config.app %>/styles/*',
      '!<%= config.app %>/styles/libsass-version.scss'
    ],
    generatedImagesDir: '.tmp/images/generated',
    imagesDir: '<%= config.app %>/images',
    javascriptsDir: '<%= config.app %>/scripts',
    fontsDir: '<%= config.app %>/fonts',
    importPath: './bower_components',
    httpImagesPath: '/images',
    httpGeneratedImagesPath: '/images/generated',
    httpFontsPath: 'fonts',
    relativeAssets: false,
    assetCacheBuster: false,
    raw: 'Sass::Script::Number.precision = 10\n'
  },
  dist: {
    options: {
      generatedImagesDir: '<%= config.dist %>/images/generated'
    }
  },
  server: {
    options: {
      debugInfo: true
    }
  }
};
