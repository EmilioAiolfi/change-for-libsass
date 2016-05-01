// grunt sprite task

module.exports = {
  icon: {
      src: [
        '<%= config.app %>/images/sprites/icon/{,*/}**.png'
      ],
      dest: '.tmp/images/generated/sprites/sprite.png',
      destCss: '<%= config.app %>/styles/_libsass/_smith-sprites.scss',
      cssFormat: 'scss',
      padding: 20,
      algorithm: 'top-down',
      // Prefix all sprite names with `sprite-` (e.g. `home` -> `sprite-home`)
      cssVarMap: function (sprite) {
        sprite.name = 'icon-' + sprite.name;
      },

      imgPath: '../images/generated/sprites/sprite.png'
  }
};
