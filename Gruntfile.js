module.exports = function(grunt) {
grunt.initConfig({
    exec: {
        jasmine: {
            command: 'jasmine'
        }
    },
    watch: {
        scripts: {
            files: ['*.js', 'spec/*.js'],
            tasks: ['exec:jasmine']
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-exec');
grunt.registerTask('default', ['watch'])

};