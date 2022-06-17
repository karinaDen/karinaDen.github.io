module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'images/build/'
                }]
            }
        },
        // concat_css: {
        //     dist: {
        //         src: ["/**/*.css"],
        //         dest: "styles.css"
        //     },
        // },


}
)
;

// grunt.loadNpmTasks('grunt-concat-css');
grunt.loadNpmTasks('grunt-contrib-imagemin');

grunt.registerTask('default', ['imagemin']);

}
;





