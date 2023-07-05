module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['main.coffee'],
        tasks: ['coffee'],
        options: {
          livereload: true,
        },
      },
      templates: {
        files: ['template.handlebars'],
        tasks: ['handlebars'],
        options: {
          livereload: true,
        },
      },
    },
    coffee: {
      compile: {
        files: {
          'main.js': 'main.coffee',
        },
      },
    },
    handlebars: {
      compile: {
        options: {
          amd: true,
        },
        files: {
          'template.js': 'template.handlebars',
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('default', ['coffee', 'handlebars']);
};
