module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'app.js': 'app.coffee'
        }
      }
    },
    watch: {
      scripts: {
        files: ['app.coffee'],
        tasks: ['coffee']
      }
    }
  });

  grunt.registerTask('sayHello', 'A task that says hello', function() {
    console.log('hello');
  });
}
