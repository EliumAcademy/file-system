module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-exec');
grunt.registerTask('default', ['watch'])

grunt.initConfig({
    exec: {
        jasmine: {
            command: 'jasmine'
        },
        npm: {
            command: 'npm start.js'
        }
    },
    watch: {
        scripts: {
            files: ['*.js', 'spec/*.js'],
            tasks: ['exec:jasmine']
        }
    }
});


};