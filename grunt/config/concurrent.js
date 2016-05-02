// grunt concurrent task

module.exports = {
  server: ['dusthtml', 'babel:dist', 'sprite', 'sass', 'compass:server'],
  compass: ['babel:dist', 'compass:server'],
  sass: ['babel:dist', 'sass'],
  test: ['dusthtml', 'babel'],
  dist: ['dusthtml', 'babel', 'sprite', 'sass', 'compass:dist', 'imagemin', 'svgmin']
};
