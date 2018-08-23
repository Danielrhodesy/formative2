module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      css: {
        files: ['public/sass/style.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
          port: 3000
        }
      }
    }, // watch end
    sass: {
      dist: {
        options: {
          style: 'expand'
        },
        files: {
          'public/css/style.css': 'public/sass/style.scss'
        }
      }
    }

  })

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-sass')

  grunt.registerTask('w', ['watch'])
}
