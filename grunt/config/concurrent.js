// grunt concurrent task

module.exports = {
  server: ['dusthtml', 'babel:dist', 'sprite', 'sass', 'compass:server'],
  compass: ['babel:dist', 'compass:server'],
  sass: ['babel:dist', 'sass'],
  test: ['dusthtml', 'babel'],
  dist: ['babel', 'sass', 'imagemin', 'svgmin']
};
