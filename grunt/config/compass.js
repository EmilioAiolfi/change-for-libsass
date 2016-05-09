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
    httpImagesPath: '/images',
    httpGeneratedImagesPath: '/images/generated',
    httpFontsPath: 'fonts',
    relativeAssets: false,
    assetCacheBuster: false,
    raw: 'Sass::Script::Number.precision = 10\n'
  },
  server: {
    options: {
      cssDir: '.tmp/styles',
      generatedImagesDir: '.tmp/images/generated',
      debugInfo: true
    }
  },
  dist: {
    options: {
      cssDir: '<%= config.dist %>/styles',
      generatedImagesDir: '<%= config.dist %>/images/generated'
    }
  }
};
