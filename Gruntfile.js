module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt, {
        pattern: 'grunt-contrib-*',
        config: 'package.json',
        scope: 'devDependencies',
        requireResolution: true
    });
    require('load-grunt-config')(grunt);

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'watch'])
};
