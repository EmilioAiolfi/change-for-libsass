// grunt compass task

module.exports = {
  options: {
    sassDir: '<%= config.app %>/styles/',
    specify: [
      '<%= config.app %>/styles/*',
      '!<%= config.app %>/styles/libsass-version.scss'
    ],
    imagesDir: '<%= config.app %>/images',
    javascriptsDir: '<%= config.app %>/scripts',
    fontsDir: '<%= config.app %>/fonts',
    importPath: './bower_components',
    httpFontsPath: 'fonts',
    relativeAssets: false,
    assetCacheBuster: false,
    raw: 'Sass::Script::Number.precision = 10\n'
  },
  server: {
    options: {
      cssDir: '.tmp/styles',
      httpImagesPath: '/images',
      httpGeneratedImagesPath: '/images/generated',
      generatedImagesDir: '.tmp/images/generated',
      debugInfo: true
    }
  },
  dist: {
    options: {
      cssDir: '<%= config.dist %>/styles',
      httpImagesPath: '../images',
      httpGeneratedImagesPath: '../images/generated',
      generatedImagesDir: '<%= config.dist %>/images/generated'
    }
  }
};
