module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        globals: {
          module: true
        }
      }
    },
    nodeunit: {
      all: ['test/nodeunit/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  //grunt.registerTask('default', ['jshint']);

};